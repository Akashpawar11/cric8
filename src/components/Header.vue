<template>
    <div>
        <b-navbar class="navbar" type="dark" toggleable="lg">
            <b-navbar-brand class="brand" href="/">CRICBUZZ
                <!-- <div class="red-dot"></div> -->
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse" class="bbb"></b-navbar-toggle>

            <b-collapse class="collapseNav collapse show" id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link class="routerLink justify-content-left" to='/'>Home</router-link>
                    <router-link class="routerLink justify-content-left" to='/asia-cup'>Asia Cup</router-link>
                    <!-- <router-link class="routerLink justify-content-left" to='/icc-rankings'>Icc Rankings</router-link> -->
                    <b-dropdown id="dropdown-grouped" text="ICC Rankings" class="m-2 justify-content-left">
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-group id="dropdown-group-1" header="ODI">
                            <b-dropdown-item-button>
                                <router-link to="/icc-rankings/odi/batsmen">Top batsmen</router-link>
                            </b-dropdown-item-button>
                            <b-dropdown-item-button>
                                <router-link to="/icc-rankings/odi/bowlers">Top bowlers</router-link>
                            </b-dropdown-item-button>
                            <b-dropdown-item-button>
                                <router-link to="/icc-rankings/odi/allrounders">Top all-rounders</router-link>
                            </b-dropdown-item-button>
                        </b-dropdown-group>
                        <b-dropdown-group id="dropdown-group-2" header="T20">
                            <b-dropdown-item-button>
                                <router-link to="/icc-rankings/t20/batsmen">Top batsmen</router-link>
                            </b-dropdown-item-button>
                            <b-dropdown-item-button>
                                <router-link to="/icc-rankings/t20/bowlers">Top bowlers</router-link>
                            </b-dropdown-item-button>
                            <b-dropdown-item-button>
                                <router-link to="/icc-rankings/t20/allrounders">Top all-rounders</router-link>
                            </b-dropdown-item-button>
                        </b-dropdown-group>
                        <b-dropdown-group id="dropdown-group-2" header="Test">
                            <b-dropdown-item-button>
                                <router-link to="/icc-rankings/test/batsmen">Top batsmen</router-link>
                            </b-dropdown-item-button>
                            <b-dropdown-item-button>
                                <router-link to="/icc-rankings/test/bowlers">Top bowlers</router-link>
                            </b-dropdown-item-button>
                            <b-dropdown-item-button>
                                <router-link to="/icc-rankings/test/allrounders">Top all-rounders</router-link>
                            </b-dropdown-item-button>
                        </b-dropdown-group>
                    </b-dropdown>
                    <!-- <router-link class="routerLink" to='/about-us'>Mat</router-link>
                    <router-link class="routerLink" to='/contact'></router-link> -->
                </b-navbar-nav>
                <!-- <b-nav-item-dropdown text="Icc Rankings" right>
                    <b-dropdown-item class="button" @click="odi">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown> -->
            </b-collapse>



        </b-navbar>
    </div>

</template>

<script>
export default {
    name: 'HeaderNav'
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    transition: 0.4s;
}

.brand {
    padding: 5px 10px;
    border-radius: 3px;
    border: 2px solid white;
    font-family: 'Montserrat';
    font-weight: 700;
    color: #ffffff;

}

.navbar-brand {
    color: #ffffff;
}

.red-dot {
    height: 10px;
    width: 10px;
    margin: 0px 1px 3px 3px;
    border-radius: 50%;
    background-color: rgb(253 0 0);
}

a.routerLink {
    color: white;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
}

.collapseNav {
    border-left: 3px solid white;
    padding-left: 1rem;
    margin-left: 1rem;
}

.bbb {

    margin: 10px 0;
}

.navbar {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 15px;
    background-color: #222222;
    /* border-bottom: 6px solid rgb(255, 183, 0); */
}

.collapseNav {
    background-color: #222222;

}

nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 0;
    padding: 0 10px;
    list-style: circle;
}

nav ul a {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* margin: 0 0 0 0; */

    padding: 12px;
    margin-left: 5px;
    margin-right: 5px;
}

nav ul a:hover {
    text-decoration: none;
    background-color: rgb(239, 239, 239);
    color: rgb(0, 0, 0);
    border-radius: 4px;
    /* display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 0;
    padding: 0 10px; */
}
</style>