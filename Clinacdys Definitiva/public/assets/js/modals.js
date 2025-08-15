// ========================================
// MODALES DE AUTENTICACIÓN - CLINACDYS
// ========================================

class AuthModals {
    constructor() {
        this.currentModal = null;
        this.isAnimating = false;
        this.init();
    }

    init() {
        this.createModals();
        this.bindEvents();
        this.addRippleEffect();
    }

    createModals() {
        // Crear modal de login
        this.createLoginModal();
        
        // Crear modal de registro
        this.createRegisterModal();
        
        // Crear modal de olvido contraseña
        this.createForgotPasswordModal();
    }

    createLoginModal() {
        const modalHTML = `
            <div id="loginModal" class="auth-modal" style="display: none;">
                <div class="modal-overlay"></div>
                <div class="modal-content">
                    <div class="modal-header">
                        <h2><i class="fas fa-sign-in-alt"></i> Iniciar Sesión</h2>
                        <button class="modal-close" onclick="authModals.closeModal('loginModal')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="loginForm" class="auth-form">
                            <div class="form-group">
                                <label for="loginEmail">
                                    <i class="fas fa-envelope"></i> Correo electrónico
                                </label>
                                <input type="email" id="loginEmail" name="email" placeholder="tu@email.com" required>
                                <div class="input-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="loginPassword">
                                    <i class="fas fa-lock"></i> Contraseña
                                </label>
                                <input type="password" id="loginPassword" name="password" placeholder="••••••••" required>
                                <div class="input-icon">
                                    <i class="fas fa-lock"></i>
                                </div>
                                <button type="button" class="toggle-password" onclick="authModals.togglePassword('loginPassword')">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                            <div class="form-group">
                                <label for="loginRole">
                                    <i class="fas fa-user-tag"></i> Rol de usuario
                                </label>
                                <select id="loginRole" name="role" required>
                                    <option value="">Selecciona tu rol</option>
                                    <option value="Paciente">Paciente</option>
                                    <option value="Profesional">Profesional de la salud</option>
                                    <option value="Administrativo">Personal administrativo</option>
                                </select>
                                <div class="input-icon">
                                    <i class="fas fa-user-tag"></i>
                                </div>
                            </div>
                            <div class="form-group checkbox-group">
                                <label class="checkbox-label">
                                    <input type="checkbox" name="remember">
                                    <span class="checkmark"></span>
                                    <i class="fas fa-clock"></i> Mantener sesión activa
                                </label>
                            </div>
                            <button type="submit" class="btn-submit">
                                <span class="button-text">Ingresar</span>
                                <span class="button-icon"><i class="fas fa-arrow-right"></i></span>
                            </button>
                        </form>
                        <div class="form-footer">
                            <a href="#" class="forgot-password-link" onclick="authModals.showModal('forgotPasswordModal')">
                                <i class="fas fa-key"></i> ¿Olvidaste tu contraseña?
                            </a>
                            <p class="no-account">
                                ¿No tienes cuenta? 
                                <a href="#" onclick="authModals.showModal('registerModal')">
                                    <i class="fas fa-user-plus"></i> Crear cuenta
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    createRegisterModal() {
        const modalHTML = `
            <div id="registerModal" class="auth-modal" style="display: none;">
                <div class="modal-overlay"></div>
                <div class="modal-content">
                    <div class="modal-header">
                        <h2><i class="fas fa-user-plus"></i> Crear Cuenta</h2>
                        <button class="modal-close" onclick="authModals.closeModal('registerModal')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="registerForm" class="auth-form">
                            <div class="form-group">
                                <label for="registerName">
                                    <i class="fas fa-user"></i> Nombre Completo
                                </label>
                                <input type="text" id="registerName" name="name" placeholder="Tu nombre completo" required>
                                <div class="input-icon">
                                    <i class="fas fa-user"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerEmail">
                                    <i class="fas fa-envelope"></i> Correo electrónico
                                </label>
                                <input type="email" id="registerEmail" name="email" placeholder="tu@email.com" required>
                                <div class="input-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerPhone">
                                    <i class="fas fa-phone"></i> Teléfono
                                </label>
                                <input type="tel" id="registerPhone" name="phone" placeholder="+57 300 123 4567" required>
                                <div class="input-icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerUsername">
                                    <i class="fas fa-at"></i> Nombre de usuario
                                </label>
                                <input type="text" id="registerUsername" name="username" placeholder="Nombre de usuario" required>
                                <div class="input-icon">
                                    <i class="fas fa-at"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerPassword">
                                    <i class="fas fa-lock"></i> Contraseña
                                </label>
                                <input type="password" id="registerPassword" name="password" placeholder="Crea una contraseña" required>
                                <div class="input-icon">
                                    <i class="fas fa-lock"></i>
                                </div>
                                <button type="button" class="toggle-password" onclick="authModals.togglePassword('registerPassword')">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                            <div class="form-group">
                                <label for="registerAddress">
                                    <i class="fas fa-map-marker-alt"></i> Dirección
                                </label>
                                <input type="text" id="registerAddress" name="address" placeholder="Dirección de residencia" required>
                                <div class="input-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                            </div>
                            <button type="submit" class="btn-submit">
                                <span class="button-text">Registrarse</span>
                                <span class="button-icon"><i class="fas fa-user-plus"></i></span>
                            </button>
                        </form>
                        <div class="form-footer">
                            <p class="have-account">
                                ¿Ya tienes cuenta? 
                                <a href="#" onclick="authModals.showModal('loginModal')">
                                    <i class="fas fa-sign-in-alt"></i> Iniciar sesión
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    createForgotPasswordModal() {
        const modalHTML = `
            <div id="forgotPasswordModal" class="auth-modal" style="display: none;">
                <div class="modal-overlay"></div>
                <div class="modal-content">
                    <div class="modal-header">
                        <h2><i class="fas fa-key"></i> ¿Olvidaste tu contraseña?</h2>
                        <button class="modal-close" onclick="authModals.closeModal('forgotPasswordModal')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="forgotPasswordForm" class="auth-form">
                            <div class="form-group">
                                <label for="forgotEmail">
                                    <i class="fas fa-envelope"></i> Correo electrónico
                                </label>
                                <input type="email" id="forgotEmail" name="email" placeholder="tu@email.com" required>
                                <div class="input-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="forgotRole">
                                    <i class="fas fa-user-tag"></i> Rol de usuario
                                </label>
                                <select id="forgotRole" name="role" required>
                                    <option value="">Selecciona tu rol</option>
                                    <option value="Paciente">Paciente</option>
                                    <option value="Profesional">Profesional de la salud</option>
                                    <option value="Administrativo">Personal administrativo</option>
                                </select>
                                <div class="input-icon">
                                    <i class="fas fa-user-tag"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="forgotPhone">
                                    <i class="fas fa-phone"></i> Número de teléfono
                                </label>
                                <input type="tel" id="forgotPhone" name="phone" placeholder="+57 300 123 4567" required>
                                <div class="input-icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                            </div>
                            <button type="submit" class="btn-submit">
                                <span class="button-text">Enviar instrucciones</span>
                                <span class="button-icon"><i class="fas fa-paper-plane"></i></span>
                            </button>
                        </form>
                        <div class="form-footer">
                            <a href="#" class="back-to-login" onclick="authModals.showModal('loginModal')">
                                <i class="fas fa-arrow-left"></i> Volver al inicio de sesión
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    showModal(modalId) {
        if (this.isAnimating) return;
        
        // Cerrar modal actual si existe
        if (this.currentModal) {
            this.closeModal(this.currentModal);
        }

        const modal = document.getElementById(modalId);
        if (modal) {
            this.isAnimating = true;
            modal.style.display = 'block';
            this.currentModal = modalId;
            
            // Agregar clase para animación
            setTimeout(() => {
                modal.classList.add('show');
                this.isAnimating = false;
            }, 10);

            // Prevenir scroll del body
            document.body.style.overflow = 'hidden';
            
            // Enfocar el primer input
            setTimeout(() => {
                const firstInput = modal.querySelector('input, select');
                if (firstInput) firstInput.focus();
            }, 300);
        }
    }

    closeModal(modalId) {
        if (this.isAnimating) return;
        
        const modal = document.getElementById(modalId);
        if (modal) {
            this.isAnimating = true;
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                this.currentModal = null;
                this.isAnimating = false;
            }, 300);
            
            // Restaurar scroll del body
            document.body.style.overflow = '';
        }
    }

    togglePassword(inputId) {
        const input = document.getElementById(inputId);
        const icon = input.nextElementSibling.nextElementSibling.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.className = 'fas fa-eye-slash';
        } else {
            input.type = 'password';
            icon.className = 'fas fa-eye';
        }
    }

    addRippleEffect() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-submit')) {
                this.createRipple(e);
            }
        });
    }

    createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }

    bindEvents() {
        // Cerrar modal al hacer clic en overlay
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.closeModal(this.currentModal);
            }
        });

        // Cerrar modal con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentModal) {
                this.closeModal(this.currentModal);
            }
        });

        // Manejar envío de formularios
        this.bindFormEvents();
        
        // Validación en tiempo real
        this.addRealTimeValidation();
    }

    bindFormEvents() {
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        // Register form
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRegister();
            });
        }

        // Forgot password form
        const forgotPasswordForm = document.getElementById('forgotPasswordForm');
        if (forgotPasswordForm) {
            forgotPasswordForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleForgotPassword();
            });
        }
    }

    addRealTimeValidation() {
        const inputs = document.querySelectorAll('.auth-form input, .auth-form select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.validateField(input);
                }
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remover clases de error previas
        field.classList.remove('error', 'success');
        
        // Validaciones específicas por tipo
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(value);
                errorMessage = 'Por favor ingresa un email válido';
                break;
                
            case 'password':
                isValid = value.length >= 8;
                errorMessage = 'La contraseña debe tener al menos 8 caracteres';
                break;
                
            case 'tel':
                const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
                isValid = phoneRegex.test(value) && value.length >= 10;
                errorMessage = 'Por favor ingresa un número de teléfono válido';
                break;
                
            default:
                isValid = value.length > 0;
                errorMessage = 'Este campo es requerido';
        }

        if (!isValid && value.length > 0) {
            field.classList.add('error');
            this.showFieldError(field, errorMessage);
        } else if (isValid && value.length > 0) {
            field.classList.add('success');
            this.removeFieldError(field);
        }
    }

    showFieldError(field, message) {
        let errorDiv = field.parentNode.querySelector('.field-error');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'field-error';
            field.parentNode.appendChild(errorDiv);
        }
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }

    removeFieldError(field) {
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.style.display = 'none';
        }
    }

    handleLogin() {
        const form = document.getElementById('loginForm');
        const submitBtn = form.querySelector('.btn-submit');
        
        // Validar todos los campos
        const inputs = form.querySelectorAll('input, select');
        let isValid = true;
        
        inputs.forEach(input => {
            this.validateField(input);
            if (input.classList.contains('error')) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            this.showMessage('Por favor corrige los errores en el formulario', 'error');
            return;
        }

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Login data:', data);
        
        // Simular loading
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Aquí iría la lógica de autenticación
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            this.closeModal('loginModal');
            this.showMessage('¡Bienvenido! Has iniciado sesión correctamente', 'success');
        }, 2000);
    }

    handleRegister() {
        const form = document.getElementById('registerForm');
        const submitBtn = form.querySelector('.btn-submit');
        
        // Validar todos los campos
        const inputs = form.querySelectorAll('input, select');
        let isValid = true;
        
        inputs.forEach(input => {
            this.validateField(input);
            if (input.classList.contains('error')) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            this.showMessage('Por favor corrige los errores en el formulario', 'error');
            return;
        }

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Register data:', data);
        
        // Simular loading
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Aquí iría la lógica de registro
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            this.closeModal('registerModal');
            this.showMessage('¡Cuenta creada exitosamente! Revisa tu email para confirmar', 'success');
        }, 2000);
    }

    handleForgotPassword() {
        const form = document.getElementById('forgotPasswordForm');
        const submitBtn = form.querySelector('.btn-submit');
        
        // Validar todos los campos
        const inputs = form.querySelectorAll('input, select');
        let isValid = true;
        
        inputs.forEach(input => {
            this.validateField(input);
            if (input.classList.contains('error')) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            this.showMessage('Por favor corrige los errores en el formulario', 'error');
            return;
        }

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Forgot password data:', data);
        
        // Simular loading
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Aquí iría la lógica de recuperación de contraseña
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            this.closeModal('forgotPasswordModal');
            this.showMessage('Se han enviado las instrucciones a tu correo electrónico', 'success');
        }, 2000);
    }

    showMessage(message, type = 'info') {
        // Crear notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        // Agregar icono según el tipo
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-triangle'
        };
        
        notification.innerHTML = `
            <i class="${icons[type]}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Mostrar notificación
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Ocultar notificación después de 4 segundos
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
}

// Inicializar modales cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.authModals = new AuthModals();
});

// Función global para mostrar modales desde enlaces
function showLoginModal() {
    if (window.authModals) {
        window.authModals.showModal('loginModal');
    }
}

function showRegisterModal() {
    if (window.authModals) {
        window.authModals.showModal('registerModal');
    }
}

function showForgotPasswordModal() {
    if (window.authModals) {
        window.authModals.showModal('forgotPasswordModal');
    }
}
