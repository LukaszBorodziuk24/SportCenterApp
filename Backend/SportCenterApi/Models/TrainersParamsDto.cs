namespace SportCenterApi.Models
{
    public class TrainersParamsDto
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }

        public string? FilterBy { get; set; }

        public string SortBy { get; set; } = "Name";
        public bool IsAscending { get; set; } = true;

    }
}
