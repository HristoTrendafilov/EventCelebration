namespace EventCelebration.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Security.Cryptography;
    using System.Text;

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.IdentityModel.Tokens;
    using Newtonsoft.Json;

    using Models;

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private const string secretKey = "Smth";
        private string usersJSONPath = @"..\EventCelebration\Data\Users.json";
        private List<User> users;

        public UserController()
        {
            users = new List<User>();
            //users = JsonConvert.DeserializeObject<List<User>>(System.IO.File.ReadAllText(usersJSONPath));
        }

        [HttpPost]
        public ActionResult<User> Register(User user)
        {
            user.Password = ComputeSha256Hash(user.Password);
           // user.JWTBearer = GenerateJwtToken(user);
            users.Add(user);

            return this.Ok();
        }
        //public ActionResult Login()
        //{
        //    return null;
        //}

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
