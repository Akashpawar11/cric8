<template>
    <div>
        <HeaderNav />
        <div>
            <div class="lds-roller" v-if="loading">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <div class="container-fluid" v-if="!loading">
            <h1 style="padding: 25px 0 10px 0;">{{this.title}}</h1>
            <table>
                <tr>
                    <th>Rank</th>
                    <th>Form</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Rating</th>
                </tr>
                <tr v-for="player in rankings" :key="player.id">
                    <td>{{player.rank}}</td>
                    <td v-if="player.trend == 'Flat'" class="flat">&#8212;</td>
                    <td v-if="player.trend == 'Up'" class="up"><i class="fa fa-angle-double-up" style="font-size:48px;color:green"></i></td>
                    <td v-if="player.trend == 'Down'" class="down"><i class="fa fa-angle-double-down" style="font-size:48px;color:red"></i></td>
                    <td v-if="player.trend == 'New'" style="color: #1877f2;border: 1px solid black; font-weight: bold;">NEW</td>

                    <td>{{player.name}}</td>
                    <td>{{player.country}}</td>
                    <td>{{player.rating}}</td>
                </tr>
            </table>
            <!-- <p>{{this.rankings}}</p> -->
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import HeaderNav from '../components/Header.vue'
export default {
    name: 'IccRankings',
    components: {
        HeaderNav
    },
    data() {
        return {
            loading: false,
            format: '',
            category: '',
            title: '',
            data: [],
            rankings: []
        }
    },
    methods: {
    },
    async mounted() {
        this.loading = true
        let formatType1 = this.$route.params.format
        console.log(this.formatType1)
        let category1 = this.$route.params.category
        console.log(this.category1)
        let results = await axios.get('https://unofficial-cricbuzz.p.rapidapi.com/stats/get-icc-rankings', {
            params: { category: category1, formatType: formatType1, isWomen: '0' },
            headers: {
                'X-RapidAPI-Key': '4019c68f6fmsh2280c1edd5d1458p1a4489jsnbb84be4d501a',
                'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
            }
        });
        console.log(results.data)
        this.rankings = results.data.rank
        this.title = results.data.appIndex.seoTitle
        let newTitle = this.title.replace("100", "");
        let newTitle1 = newTitle.replace("| Cricbuzz.com","")
        this.title = newTitle1
        this.data = results
        this.loading = false

        // let results2 = await axios.get('https://unofficial-cricbuzz.p.rapidapi.com/get-image', {

        //     params: { id: '170702' },
        //     headers: {
        //         'X-RapidAPI-Key': '4019c68f6fmsh2280c1edd5d1458p1a4489jsnbb84be4d501a',
        //         'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
        //     }
        // });

    }
}

</script>

<style>
table {
    width: 60%;
    border-collapse: collapse;
    margin: 25px auto;
}
tr{
    height: 65px;
}
th, td {

    border: 1px solid;
    padding: 10px;
}

/* Loader starts */
.lds-roller {
    display: inline-block;
    position: relative;
    width: 90px;
    height: 90px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    margin-top: 3rem;
    text-align: center;
    margin-top: 12%;
}

.lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
}


.lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgb(4, 32, 48);
    margin: -4px 0 0 -4px;
}

.lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
}

.lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
}

.lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
}

.lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
}

.lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
}

.lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
}

.lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
}

.lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
}

.lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
}

.lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
}

.lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
}

.lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
}

.lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
}

.lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
}

.lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
}

.lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
}

@keyframes lds-roller {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>