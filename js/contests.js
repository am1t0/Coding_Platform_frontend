// Combined contest script for Codeforces, LeetCode, CodeChef, and HackerRank using Clist API

const platforms = [
  {
    name: 'codeforces',
    host: 'codeforces.com',
    detailsId: 'details1',
    nextId: 'next1',
    index: 0,
    list: []
  },
  {
    name: 'leetcode',
    host: 'leetcode.com',
    detailsId: 'details2',
    nextId: 'next2',
    index: 0,
    list: []
  },
  {
    name: 'codechef',
    host: 'codechef.com',
    detailsId: 'details3',
    nextId: 'next3',
    index: 0,
    list: []
  },
  {
    name: 'hackerrank',
    host: 'hackerrank.com',
    detailsId: 'details4',
    nextId: 'next4',
    index: 0,
    list: []
  }
];

function renderContest(platform) {
  const content = document.getElementById(platform.detailsId);
  if (!platform.list.length) {
    content.innerHTML = '<div class="temporary"><h1>No contests found.</h1></div>';
    return;
  }
  const idx = platform.index;
  const contest = platform.list[idx];
  const ihtml = `<h3 class="contests_type">${idx + 1} &nbsp; ${contest.event}</h3>
    <p class="contest_time">start: &nbsp; ${contest.start}</p>
    <p class="contest_time">end: &nbsp;${contest.end}</p>
    <p class="duration">duration: &nbsp;${contest.duration}</p>
    <button class="give"><a href="${contest.href}" target="_blank">Try Now</a></button>`;
  content.innerHTML = ihtml;
}

function setupPlatform(platform) {
  const nextBtn = document.getElementById(platform.nextId);
  if (nextBtn) {
    nextBtn.onclick = () => {
      if (!platform.list.length) return;
      platform.index = (platform.index + 1) % platform.list.length;
      renderContest(platform);
    };
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // Fetch all contests from Clist API once
  fetch('https://clist.by/api/v2/contest?username=amey___25&api_key=b78c3701bceae65245c313c63104dfbdd6c092f4')
    .then(res => res.json())
    .then(data => {
      // Filter contests for each platform
      platforms.forEach(platform => {
        platform.list = data.objects.filter(contest => {
          const host = contest.host || contest.resource;
          return host && host.includes(platform.host);
        });
        platform.index = 0;
        renderContest(platform);
        setupPlatform(platform);
      });
    })
    .catch(() => {
      platforms.forEach(platform => {
        const content = document.getElementById(platform.detailsId);
        content.innerHTML = '<div class="temporary"><h1>Failed to load contests.</h1></div>';
      });
    });
});
