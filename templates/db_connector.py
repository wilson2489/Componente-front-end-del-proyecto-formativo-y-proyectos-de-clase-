import mysql.connector

# Configuración de la conexión a la base de datos
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'tu_contraseña_mysql',
    'database': 'rpromed_db'
}

try:
    # Establecer la conexión
    mydb = mysql.connector.connect(**db_config)
    mycursor = mydb.cursor()

    # Ejemplo: Insertar un nuevo paciente
    sql = "INSERT INTO Pacientes (Nombre, Apellido, NumeroDocumento) VALUES (%s, %s, %s)"
    val = ("Carlos", "Pérez", "123456789")
    mycursor.execute(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "registro insertado.")

    # Ejemplo: Leer todos los pacientes
    mycursor.execute("SELECT * FROM Pacientes")
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)

except mysql.connector.Error as err:
    print(f"Error: {err}")

finally:
    # Cerrar la conexión
    if mydb.is_connected():
        mycursor.close()
        mydb.close()
        print("Conexión cerrada.")