function setCookie(nombre, valor, diasExpiracion) {
            var fecha = new Date();
            fecha.setTime(fecha.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));
            var expiracion = "expires=" + fecha.toUTCString();
            document.cookie = nombre + "=" + valor + "; " + expiracion;
        }

     
        function usuarioAceptoCookies() {
            return document.cookie.indexOf("aceptoCookies=true") !== -1;
        }

       
        function mostrarMensajeCookies() {
            if (!usuarioAceptoCookies()) {
                var mensaje = "This website uses cookies to improve your experience. Do you accept our cookies?";
                if (confirm(mensaje)) {
                    
                    setCookie("aceptoCookies", "true", 365);  
                }
            }
        }
