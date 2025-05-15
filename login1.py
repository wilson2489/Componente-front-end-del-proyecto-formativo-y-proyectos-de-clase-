.\venv\Scripts\activate
#!/usr/bin/env python
# -*- coding: utf-8 -*-
from Flask import Flask, render_template, request, redirect, url_for, flash, session
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = "clave_secreta_segura"

# Base de datos simulada (reemplázala con una real)
usuarios_db = {
    "WILSON": generate_password_hash("1234"),
}

@app.route('/')
def index():
    return render_template('index.html')

# Página de registro
@app.route('/registrarse', methods=["GET", "POST"])
def registrarse():
    if request.method == "POST":
        usuario = request.form.get("username")
        contraseña = request.form.get("password")

        if usuario in usuarios_db:
            flash("El usuario ya existe, intenta con otro.", "danger")
        else:
            usuarios_db[usuario] = generate_password_hash(contraseña)
            flash("Usuario registrado exitosamente.", "success")
            return redirect(url_for("index"))
    
    return render_template('registrarse.html')

# Autenticación (Login)
@app.route("/login", methods=["POST"])
def login():
    usuario = request.form.get("username")
    contraseña = request.form.get("password")

    if usuario in usuarios_db and check_password_hash(usuarios_db[usuario], contraseña):
        session["usuario"] = usuario  # Iniciar sesión
        flash("Inicio de sesión exitoso.", "success")
        return redirect(url_for("usuarios"))
    else:
        flash("Credenciales incorrectas, inténtalo de nuevo.", "danger")
        return redirect(url_for("index"))

# Gestión de usuarios (solo si está autenticado)
@app.route('/usuarios')
def usuarios():
    if "usuario" not in session:
        flash("Debes iniciar sesión para acceder.", "warning")
        return redirect(url_for("index"))
    
    return render_template('usuarios.html', usuario=session["usuario"])

@app.route('/logout')
def logout():
    session.pop("usuario", None)
    flash("Sesión cerrada correctamente.", "info")
    return redirect(url_for("index"))

if __name__ == '__main__': 
    app.run(debug=True, port=8002)

