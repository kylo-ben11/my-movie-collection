import React from "react";
import $ from "jquery";

$(document).ready(function ($) {
  $("#filter-all").on("click", function () {
    $(".movie-card").removeClass("hidden");
  });
  $("#filter-action").on("click", function () {
    $(".movie-card").not("[data-genre*='Action']").addClass("hidden");
    if ($('.movie-card[data-genre*="Action"]').hasClass("hidden")) {
      $(".movie-card[data-genre*='Action']").removeClass("hidden");
    }
  });
  $("#filter-comedy").on("click", function () {
    $(".movie-card").not("[data-genre*='Comedy']").addClass("hidden");
    if ($('.movie-card[data-genre*="Comedy"]').hasClass("hidden")) {
      $(".movie-card[data-genre*='Comedy']").removeClass("hidden");
    }
  });
  $("#filter-drama").on("click", function () {
    $(".movie-card").not("[data-genre*='Drama']").addClass("hidden");
    if ($('.movie-card[data-genre*="Drama"]').hasClass("hidden")) {
      $(".movie-card[data-genre*='Drama']").removeClass("hidden");
    }
  });
  $("#filter-kids").on("click", function () {
    $(".movie-card").not("[data-genre*='Family']").addClass("hidden");
    if ($('.movie-card[data-genre*="Family"]').hasClass("hidden")) {
      $(".movie-card[data-genre*='Family']").removeClass("hidden");
    }
  });
  $("#filter-hard-copy").on("click", function () {
    $(".movie-card")
      .not("[data-streaming*='DVD'], [data-streaming*='Blu-Ray']")
      .addClass("hidden");
    if (
      $(
        '.movie-card[data-streaming*="DVD"], .movie-card[data-streaming*="Blu-Ray"]'
      ).hasClass("hidden")
    ) {
      $(
        ".movie-card[data-streaming*='DVD'], .movie-card[data-streaming*='Blu-Ray']"
      ).removeClass("hidden");
    }
  });
  $("#filter-van-ready").on("click", function () {
    $(".movie-card").not("[data-van-ready*='true']").addClass("hidden");
    if ($('.movie-card[data-van-ready*="true"]').hasClass("hidden")) {
      $(".movie-card[data-van-ready*='true']").removeClass("hidden");
    }
  });
});

const Filters = () => {
  return (
    <div className="row d-flex align-items-center movie-list__filters">
      <div className="btn col-sm-1 filter-btn" id="filter-all">
        All
      </div>
      <div className="btn col-sm-1 filter-btn" id="filter-action">
        Action
      </div>
      <div className="btn col-sm-1 filter-btn" id="filter-comedy">
        Comedy
      </div>
      <div className="btn col-sm-1 filter-btn" id="filter-drama">
        Drama
      </div>
      <div className="btn col-sm-1 filter-btn" id="filter-kids">
        Kids/Family
      </div>
      <div className="btn col-sm-1 filter-btn" id="filter-hard-copy">
        Hard Copy
      </div>
      <div className="btn col-sm-1 filter-btn" id="filter-van-ready">
        Van Ready
      </div>
    </div>
  );
};

export default Filters;
