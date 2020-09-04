const bookmarks = []
function createBookmark (url, title, favicon = null) {
  let t
  if (!title) {
    t = url.split('//')[1]
    t = t.split('.')[0]
  }

  const bookmark = {
    url,
    title: title || t,
    favicon,
  }
  bookmarks.push(bookmark)
}

createBookmark('https://svt.se')
createBookmark('https://news.ycombinator.com', 'Hacker News')
createBookmark('https://hackaday.com')
createBookmark('https://www.raspberrypi.org/blog/', 'RPI Blog')

function init () {
  const bookmarksWrapper = document.querySelector('#bookmarks')
  bookmarks.map(bookmark => {
    console.log(bookmark)
    const card = document.createElement('a')
    card.className = 'bookmark'
    card.innerHTML = bookmark.title
    card.href = bookmark.url
    bookmarksWrapper.appendChild(card)
  })
}
init()
