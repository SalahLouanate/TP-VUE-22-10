
const app = Vue.createApp({
    data() {
        return {
            homme: true,
            femme: true,
            tel: true,
            mef: false,
            taille: 2, // 2 = Moyen par défaut
            filtreNom: '',
            personnes: [
                {
                    "gender": "female",
                    "name": { "title": "Mrs", "first": "Elizabeth", "last": "Ambrose" },
                    "location": { "country": "Canada" },
                    "email": "elizabeth.ambrose@example.com",
                    "login": { "uuid": "50777e60-394d-4951-b933-a2f78599065d" },
                    "phone": "366-033-8063",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/49.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/49.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg"
                    }
                },
                {
                    "gender": "male",
                    "name": { "title": "Mr", "first": "Batista", "last": "Silveira" },
                    "location": { "country": "Brazil" },
                    "email": "batista.silveira@example.com",
                    "login": { "uuid": "5308f02b-7838-4b48-8114-2fe1349c0819" },
                    "phone": "(53) 5553-2892",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/50.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/50.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/50.jpg"
                    }
                },
                {
                    "gender": "male",
                    "name": { "title": "Mr", "first": "Blaise", "last": "Adam" },
                    "location": { "country": "Switzerland" },
                    "email": "blaise.adam@example.com",
                    "login": { "uuid": "3f7d9b90-8858-4986-bdf3-075df560ce31" },
                    "phone": "079 493 00 77",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/29.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/29.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/29.jpg"
                    }
                }
            ]
        }
    }
});
app.mount('#app');
