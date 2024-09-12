﻿using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace SportCenterApi.Models
{
    public class AppUser : IdentityUser
    {
        public SportType? UserSportType { get; set; }

        public string? Name { get; set; }

        public string? LastName { get; set; }
        public string? City { get; set; }
        public string? Country { get; set; }

        public float? Rating { get; set; }


    }
}
