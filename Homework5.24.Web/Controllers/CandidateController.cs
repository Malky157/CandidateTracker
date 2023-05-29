using Homework5._24.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Homework5._24.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly string _connectionString;
        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("addcandidate")]
        [HttpPost]
        public void AddCandidate(Candidate candidate)
        {
            var cr = new CandidateRepository(_connectionString);
            cr.AddCandidate(candidate);
        }
        [Route("getpendingcandidates")]
        [HttpGet]
        public List<Candidate> GetPendingCandidates()
        {
            var cr = new CandidateRepository(_connectionString);
            return cr.GetPendingCandidates();
        }
        [Route("getconfirmedcandidates")]
        [HttpGet]
        public List<Candidate> GetConfirmedCandidates()
        {
            var cr = new CandidateRepository(_connectionString);
            return cr.GetConfirmedCandidates();
        }
        [Route("getdeclinedcandidates")]
        [HttpGet]
        public List<Candidate> GetDeclinedCandidates()
        {
            var cr = new CandidateRepository(_connectionString);
            return cr.GetDeclinedCandidates();
        }
        [Route("getcandidatebyid")]
        [HttpGet]
        public Candidate GetCandidateById(int id)
        {
            var cr = new CandidateRepository(_connectionString);
            return cr.GetCandidateById(id);
        }
        [Route("getcandidatecounts")]
        [HttpGet]
        public List<int> GetCandidateCounts()
        {
            var cr = new CandidateRepository(_connectionString);
            return cr.GetCounts();
        }
        [Route("updatestatus")]
        [HttpPost]
        public void UpdateStatus(RegistrationStatus status, int id)
        {
            var cr = new CandidateRepository(_connectionString);
            cr.UpdateStatus(status, id);
        }
    }
}
