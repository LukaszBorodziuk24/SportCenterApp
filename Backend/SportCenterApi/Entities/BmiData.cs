using SportCenterApi.Models.Enums;

namespace SportCenterApi.Entities
{
    public class BmiData
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public float BmiResult { get; set; }
        public float Weight { get; set; }
        public float Height{ get; set; }
        public int Age { get; set; }
        public Gender DeclaredGender { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;



        public string UserId { get; set; }
        public AppUser User { get; set; }
    }
}
