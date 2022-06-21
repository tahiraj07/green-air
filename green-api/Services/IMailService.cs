public interface IMailService
{
    Task SendEmailAsync(MailRequest mailRequest);
}