﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetBanking.Models.Request
{
    public class InfoUserRequest
    {
        public string account_number { get; set; }
    }

    public class InfoUserResponse
    {
        public string account_number { get; set; }
        public string full_name { get; set; }
        public string gender { get; set; }
        public string address { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
    }
}
