using System.ComponentModel.DataAnnotations;

namespace SportCenterApi.Models
{
    public class RegisterDto
    {

        [Required]
        public string? Name { get; set; }

        [Required]
        public string? LastName { get; set; }

        [Required]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }
        

    }
}
