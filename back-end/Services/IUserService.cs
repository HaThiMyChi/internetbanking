﻿using InternetBanking.Models;
using InternetBanking.Models.Filters;
using System;
using System.Collections.Generic;

namespace InternetBanking.Services
{
    public interface IUserService
    {
        public IEnumerable<User> GetUsers(UserFilter userFilter);
        public bool UpdateUser(User user);
        public User AddUser(User user);
        public bool AddSavingsAccount(UserFilter userFilter, BankAccount bankAccount);
    }
}
