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
    </div>
</template>

<script>
import axios from 'axios'
import HeaderNav from '../components/Header.vue'
export default {
    name: 'HomePage',
    components: {
        HeaderNav
    },
    data() {
        return {
            seriesName: '',
            score: '',
            data: [],
            loading : false
        }
    },
    async mounted() {
        this.loading = true
        let results = await axios.get(
            'https://unofficial-cricbuzz.p.rapidapi.com/matches/list', {
            headers: {
                'X-RapidAPI-Key': '4019c68f6fmsh2280c1edd5d1458p1a4489jsnbb84be4d501a',
                'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
            },
            params: { matchState: 'recent' }
        });
        console.log(results)
        this.score = results.data.typeMatches[0].seriesAdWrapper[0].seriesMatches.matches[0].matchScore.team1Score.inngs1
        this.seriesName = results.data.typeMatches[0].seriesAdWrapper[0].seriesMatches.seriesName
        this.data = results.data.typeMatches[0].seriesAdWrapper[0].seriesMatches.matches
        this.loading = false
    }
}
</script>

<style>


.row {
    margin: 0;
}
.matchData{
    width: 100%;
    height: 14rem;
    border: 2px solid black;
    border-radius: 16px;
    margin: 15px 0;
}
.matchDesc{
    background-color: #e7e7e7;
    border-radius: 15px 15px 0px 0px;
    padding: 8px;
    border-bottom: 2px solid;
    margin: 0;
    font-size: 1.1rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.matchScore{
    padding: 10px 0 6px 0;
    border-top: 2px solid;
    border-bottom: 2px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: burlywood;
}
.matchStatus{
    font-size: 1.2rem;
    padding: 19.5px;
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: #9bd9e5;
    border-radius: 0 0 16px 16px;
}
</style>