namespace EventCelebration.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Security.Cryptography;
    using System.Linq;
    using System.Text;

    using Microsoft.AspNetCore.Mvc;
    using Newtonsoft.Json;

    using Models;

    //Just a comment

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        // private const string secretKey = "Smth";
        private string usersJSONPath = @"..\EventCelebration\Data\Users.json";

        private List<User> users;

        public UserController()
        {
            DeserializeJsonToUsers(usersJSONPath);
        }


        [HttpPost]
        [Route("Register")]
        public ActionResult<User> Register(User user)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest();
            }

            user.Id = Guid.NewGuid().ToString();
            user.Password = ComputeSha256Hash(user.Password);

            // user.JWTBearer = GenerateJwtToken(user);

            if (users.Any())
            {
                foreach (var currentUser in users)
                {
                    if (currentUser.Username == user.Username)
                    {
                        return this.StatusCode(409);
                    }
                }
            }

            users.Add(user);

            SerializeUsersToJSON(users);

            return this.Ok();
        }

        [HttpPost]
        [Route("Login")]
        public ActionResult Login(User user)
        { if (!ModelState.IsValid)
            {
                return this.BadRequest();
            }
           

            user.Password = ComputeSha256Hash(user.Password);

            if (users.Any())
            {
                for (int i = 0; i < users.Count; i++)
                {
                    var currentUser = users[i];
                    if (currentUser.Username == user.Username && currentUser.Password == user.Password)
                    {
                        currentUser.Token = Guid.NewGuid().ToString();
                        SerializeUsersToJSON(users);
                        return this.Ok();
                    }

                }

            }

            return this.NotFound();
        }

        private void SerializeUsersToJSON(List<User> users)
        {
            var convertedJson = JsonConvert.SerializeObject(users, Formatting.Indented);
            System.IO.File.WriteAllText(usersJSONPath, convertedJson);
        }
        private void DeserializeJsonToUsers(string usersJSONPath)
        {
            this.users = JsonConvert.DeserializeObject<List<User>>(System.IO.File.ReadAllText(usersJSONPath));
            if (this.users is null)
            {
                this.users = new List<User>();
            }
        }

        //private string GenerateJwtToken(User user)
        //{
        //    var tokenHandler = new JwtSecurityTokenHandler();
        //    var key = Encoding.ASCII.GetBytes(secretKey);
        //    var tokenDescriptor = new SecurityTokenDescriptor
        //    {
        //        Subject = new ClaimsIdentity(new[]
        //                            { new Claim("Username", user.Username.ToString()),
        //                              new Claim("Password", user.Password.ToString())}),
        //        Expires = DateTime.UtcNow.AddDays(7),
        //        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        //    };
        //    var token = tokenHandler.CreateToken(tokenDescriptor);
        //    return tokenHandler.WriteToken(token);
        //}

        static string ComputeSha256Hash(string rawData)
        {
            using (SHA256 sha256Hash = SHA256.Create())
            {
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));

                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }
    }
}
