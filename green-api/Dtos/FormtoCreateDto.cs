namespace  green_api.Dtos
{
    public class FormtoCreateDto
    {
        public int Id { get; set; }
        public string submission_id { get; set; }
        public string option { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string email { get; set; }
        public string? PublicId { get; set; }
        public string? company { get; set; }
        public string? company_id { get; set; }
        public string price { get; set; }
        public string payee { get; set; }
        public string iban { get; set; }
        public string? gift_code { get; set; }
        public IFormFile? image1 { get; set; }
        public IFormFile? image2 { get; set; }
        public string? url { get; set; }
        public string? url1 { get; set; }
        public string? time { get; set; }
        public DateTime? date { get; set; }
        public string? agb { get; set; }
        public string? terms { get; set; }
        public string? class_v { get; set; }
        public string? price_tag { get; set; }
        public string? unique_id { get; set; }
        
    }
}