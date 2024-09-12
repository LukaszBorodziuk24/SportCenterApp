namespace SportCenterApi.Models
{
    public class SortParamsDto
    {
        public string SortBy { get; set; } = "Name";
        public bool IsAscending { get; set; } = true;
    }
}
