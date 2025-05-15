using System;
using System.Data.SqlClient;
using System.Windows.Forms;

namespace LoginApp
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            string username = txtUsername.Text;
            string password = txtPassword.Text;

            if (ValidateLogin(username, password))
            {
                MessageBox.Show("Login exitoso!");
                // Aquí podrías abrir otra ventana o formulario.
            }
            else
            {
                lblError.Text = "Nombre de usuario o contraseña incorrectos.";
            }
        }

        private bool ValidateLogin(string username, string password)
        {
            string connectionString = "Server=localhost; Database=LoginDB; Integrated Security=True;";
            string query = "SELECT COUNT(*) FROM Users WHERE Username = @Username AND Password = @Password";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@Username", username);
                command.Parameters.AddWithValue("@Password", password);

                try
                {
                    connection.Open();
                    int result = (int)command.ExecuteScalar();
                    return result > 0;
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error al conectar a la base de datos: " + ex.Message);
                    return false;
                }
            }
        }
    }
}
