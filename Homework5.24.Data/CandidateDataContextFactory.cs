using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Homework5._24.Data
{
    public class CandidateDataContextFactory : IDesignTimeDbContextFactory<CandidateDbContext>
    {
        public CandidateDbContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
               .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}Homework5.24.Web"))
               .AddJsonFile("appsettings.json")
               .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CandidateDbContext(config.GetConnectionString("ConStr"));
        }
    }
}
