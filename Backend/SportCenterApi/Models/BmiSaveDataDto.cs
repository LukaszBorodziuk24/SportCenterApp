using SportCenterApi.Models.Enums;

namespace SportCenterApi.Models
{
    public class BmiSaveDataDto
    {
        public float BmiResult { get; set; }
        public float Weight { get; set; }
        public float Height { get; set; }
        public int Age { get; set; }
        public Gender DeclaredGender { get; set; }
    }
}
