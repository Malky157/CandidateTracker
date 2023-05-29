using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework5._24.Data
{
    public class CandidateRepository
    {
        private readonly string _connectionString;
        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate candidate)
        {
            var context = new CandidateDbContext(_connectionString);
            candidate.RegistrationStatus = RegistrationStatus.Pending;
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }
        private IEnumerable<Candidate> GetAllCandidates()
        {
            var context = new CandidateDbContext(_connectionString);
            return context.Candidates;
        }
        public List<Candidate> GetPendingCandidates()
        {
            return GetAllCandidates().Where(c => c.RegistrationStatus == RegistrationStatus.Pending).ToList();
        }
        public List<Candidate> GetConfirmedCandidates()
        {
            return GetAllCandidates().Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).ToList();
        }
        public List<Candidate> GetDeclinedCandidates()
        {
            return GetAllCandidates().Where(c => c.RegistrationStatus == RegistrationStatus.Declined).ToList();
        }
        public Candidate GetCandidateById(int id)
        {
            var context = new CandidateDbContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public List<int> GetCounts()
        {
            return new List<int>() {
            GetPendingCandidates().Count,
            GetConfirmedCandidates().Count,
            GetDeclinedCandidates().Count,
            };
        }
        public void UpdateStatus(RegistrationStatus status, int id)
        {
            var context = new CandidateDbContext(_connectionString);
            Candidate c = context.Candidates.Find(id);
            c.RegistrationStatus = status;
            context.SaveChanges();

        }

    }
}
