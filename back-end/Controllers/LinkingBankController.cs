﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InternetBanking.Models;
using InternetBanking.Services;
using InternetBanking.Settings;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InternetBanking.Controllers
{
    public class LinkingBankController : ApiController
    {
        private ISetting _Setting;
        private ILinkingBankService _Service;

        public LinkingBankController(ISetting setting, ILinkingBankService service)
        {
            _Setting = setting;
            _Service = service;
        }

        /// <summary>
        /// Danh sách ngân hàng liên kết
        /// </summary>
        /// <returns>IEnumerable<LinkingBank></returns>
        // GET: api/Ultis/LinkingBanks
        [HttpGet("LinkingBanks")]
        public IActionResult GetLinkingBank()
        {
            var res = _Service.GetLinkingBank();
            return Ok(res);
        }

        /// <summary>
        /// Thêm ngân hàng liên kết
        /// </summary>
        /// <returns>IEnumerable<LinkingBank></returns>
        [HttpPost("AddLinkingBanks")]
        public IActionResult AddLinkingBank(LinkingBank bank)
        {
            var res = _Service.CreateLinkingBank(bank);
            return Ok(res);
        }
    }
}