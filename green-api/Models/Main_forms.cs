using System;

namespace green_api.Models
{
    public class Main_forms
    {
        public int Id { get; set; }
        public int submission_id { get; set; }
        public string option { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string email { get; set; }
        public string? company { get; set; }
        public string? company_id { get; set; }
        public string price { get; set; }
        public string payee { get; set; }
        public string iban { get; set; }
        public string? gift_code { get; set; }
        public string? PublicId { get; set; }
        public string? image1 { get; set; }
        public string? image2 { get; set; }
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