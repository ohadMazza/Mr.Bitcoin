export const contactService = {
    getContacts,
    getContactById,
    deleteContact,
    saveContact,
    getEmptyContact
}



const contacts = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ashley Patterson",
        "email": "ashleypatterson@renovize.com",
        "phone": "+1 (968) 593-3824",
        "img": "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg"


    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "name": "Jessica Washington",
        "email": "jessicawashington@renovize.com",
        "phone": "+1 (948) 464-2888",
        "img": "https://static.generated.photos/vue-static/face-generator/landing/demo-previews/makeup.jpg"
    },
    {
        "_id": "5a56640252d6acddd183d319",
        "name": "Andrew Adams",
        "email": "andrewadams@renovize.com",
        "phone": "+1 (958) 502-3495",
        "img": "https://static.generated.photos/vue-static/face-generator/landing/wall/3.jpg"

    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "name": "Rachel Lowe",
        "email": "rachellowe@renovize.com",
        "phone": "+1 (911) 475-2312",
        "img":"https://static.generated.photos/vue-static/face-generator/landing/wall/17.jpg"
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "name": "Rose Collins",
        "email": "rosecollins@renovize.com",
        "phone": "+1 (807) 551-3258",
        "img":"https://images.generated.photos/G_DjoAfwoFWkllFGqyKdVqnz21d868C_h3L4NAbiVJo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzM2NzAzLmpwZw.jpg"
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "name": "Christine Flores",
        "email": "christineflores@renovize.com",
        "phone": "+1 (970) 527-3082",
        "img":"https://images.generated.photos/sxOrvkjRO-eQoyl9v6CVvvlBSO-FOLwR1rxrQ2JyKo4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE5NzE3LmpwZw.jpg"
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "name": "Charles Sanders",
        "email": "charlessanders@renovize.com",
        "phone": "+1 (952) 501-2678",
        "img":"https://static.generated.photos/vue-static/face-generator/landing/wall/6.jpg"
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "name": "Nicholas Morgan",
        "email": "nicholasmorgan@renovize.com",
        "phone": "+1 (989) 503-2663",
        "img":"https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-02.jpg"
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "name": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "phone": "+1 (968) 454-3851",
        "img":"https://www.thesun.co.uk/wp-content/uploads/2019/09/080012.jpg"
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "name": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "phone": "+1 (986) 545-2166",
        "img":"https://images.generated.photos/CKVh1pQGY6MCYz7V9Cgczh17y5pfW6QBpduPlUkIgEQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzg1MDY4LmpwZw.jpg"
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "name": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "phone": "+1 (929) 571-2295",
        "img":"https://www.boredpanda.com/blog/wp-content/uploads/2018/12/ai-image-generation-fake-faces-people-nvidia-5c18b20b472c2__700.jpg"
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "name": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "phone": "+1 (977) 419-3550",
        "img":"https://helios-i.mashable.com/imagery/articles/02RpvwFM3kDzdCCY5OiIKi3/images-1.fit_lim.size_376x.jpg"
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "name": "Kenneth Ross",
        "email": "kennethross@renovize.com",
        "phone": "+1 (963) 471-3181",
        "img":"https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg"
    },
    {
        "_id": "5a56640298ab77236845b82b",
        "name": "Glenna Santana",
        "email": "glennasantana@renovize.com",
        "phone": "+1 (860) 467-2376",
        "img": "https://meragor.com/files/styles//220_220_bottom_wm/avatar-455347-034818.png"
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "name": "Malone Clark",
        "email": "maloneclark@renovize.com",
        "phone": "+1 (818) 565-2557",
        "img": "https://images.generated.photos/zTKIHirjvMWohfp-yjJCEpJ6fZA2a8kicOZ4vRJtFns/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDQ0ODk2LmpwZw.jpg"
    },
    {
        "_id": "5a566402abb3146207bc4ec5",
        "name": "Floyd Rutledge",
        "email": "floydrutledge@renovize.com",
        "phone": "+1 (807) 597-3629",
        "img":"https://images.generated.photos/Z1MEsRyAwQimemxKjjkTdlWtg01TbtiE29Fwj137Jaw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM4MTUzLmpwZw.jpg"
        
    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "name": "Grace James",
        "email": "gracejames@renovize.com",
        "phone": "+1 (959) 525-2529",
        "img":"https://images.generated.photos/F2e-uWPg82DgvdX48HbPD6RxJ3u07R2LWNGnTT6uE4g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjIxMTE3LmpwZw.jpg"
    },
    {
        "_id": "5a56640243427b8f8445231e",
        "name": "Joseph Brooks",
        "email": "josephbrooks@renovize.com",
        "phone": "+1 (978) 591-2291",
        "img": "https://images.generated.photos/5oyo6Y0JmNT_SrwDSvMiYl8mvrCPwBqOHlLijVf-6oU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/MzIxODIzLmpwZw.jpg"
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Lilly Conner",
        "email": "lillyconner@renovize.com",
        "phone": "+1 (842) 587-3812",
        "img": "https://images.generated.photos/VNExeU3BKDSOwvRsPF1Z9a4aNM40P4uLVPCAJtyPXuk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNTQ4/OTg2LmpwZw.jpg"
    }
];

function sort(arr) {
    return arr.sort((a, b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
        }
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
        }

        return 0;
    })
}

function getContacts(filterBy = null) {
    return new Promise((resolve, reject) => {
        var contactsToReturn = contacts;
        if (filterBy && filterBy.term) {
            contactsToReturn = filter(filterBy.term)
        }
        resolve(sort(contactsToReturn))
    })
}

function getContactById(id) {
    return new Promise((resolve, reject) => {
        const contact = contacts.find(contact => contact._id === id)
        contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
    })
}

function deleteContact(id) {
    return new Promise((resolve, reject) => {
        const index = contacts.findIndex(contact => contact._id === id)
        if (index !== -1) {
            contacts.splice(index, 1)
        }

        resolve(contacts)
    })
}

function _updateContact(contact) {
    return new Promise((resolve, reject) => {
        const index = contacts.findIndex(c => contact._id === c._id)
        if (index !== -1) {
            contacts[index] = contact
        }
        resolve(contact)
    })
}

function _addContact(contact) {
    return new Promise((resolve, reject) => {
        contact._id = _makeId()
        contacts.push(contact)
        resolve(contact)
    })
}

function saveContact(contact) {
    return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: ''
    }
}

function filter(term) {
    term = term.toLocaleLowerCase()
    return contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(term) ||
            contact.phone.toLocaleLowerCase().includes(term) ||
            contact.email.toLocaleLowerCase().includes(term)
    })
}

function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}