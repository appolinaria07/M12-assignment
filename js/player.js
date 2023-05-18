
class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

// ************
// CREATE AN ARRAY OF ALBUMS
let albumArr = [{artist: 'Operation Ivy',   title: 'Energy'},
                {artist: 'Blink 182',       title: 'Dude Ranch'},
                {artist: 'New Found Glory', title: 'Sticks and Stones'}
               ]

const $ = (id) => document.getElementById(id)

// ADD EACH ALBUM FROM THE ARRAY TO AN OPTION
let select = $('albums')

for (let i = 0; i < albumArr.length; i++) {
    let option = document.createElement('option')
    option.value = `${albumArr[i].artist} - ${albumArr[i].title}`
    option.text = `${albumArr[i].artist} - ${albumArr[i].title}`
    select.appendChild(option)
}
 
// CREATE NEW ALBUM OBJECT INSTANCES FROM ALBUMARR 
let newObj = []
for (let i = 0; i < albumArr.length; i++) {
    newObj[i] = new Album(albumArr[i].artist, albumArr[i].title)
}
const [album1, album2, album3] = newObj

const jbox = new Jukebox()
const albumArrInstances = [album1, album2, album3]
for (let i =0; i <albumArr.length; i++) {
    jbox.addAlbum(albumArrInstances[i])
}

$('playBtn').addEventListener('click', ()=>{
    for (let i = 0; i < select.options.length; i++) {                   
        if (select[i].selected && select[i].value === album1.artist + ' - ' + album1.title) {
            album1.play();
        } else if (select[i].selected && select[i].value === album2.artist + ' - ' + album2.title) {
            album2.play();
        }  else if (select[i].selected && select[i].value === album3.artist + ' - ' + album3.title) {
            album3.play();
        } 
    }
})

$('show').addEventListener('click', ()=>{
    $('favoriteAlbum').textContent = jbox.favoriteAlbum()
})
