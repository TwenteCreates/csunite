<template xmlns="http://www.w3.org/1999/html">
    <div>
    <v-toolbar>
    <v-toolbar-title>Profile</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
    <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
    <v-icon>more_vert</v-icon>
    </v-btn>
    </v-toolbar>
    <v-layout>
        <v-flex xs12 sm6>
            <v-card>
                <v-card-media src="" height="150px">
                    <v-container grid-list-md text-xs-center class="mt-5">
                        <v-layout row wrap>
                            <v-flex >
                                <v-avatar size="125" class="orange">
                                    <!--<v-icon x-large dark>security</v-icon>-->
                                    <img src="assets/woman.svg"><
                                    <heart-rating :read-only="true"
                                                  :rating="4.3"
                                                  :increment="0.01"
                                                  :item-size="15"
                                    ></heart-rating>
                                </v-avatar>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-media>

                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Jane Doe</h3>
                        <div>Located two hours south of Amsterdam in the <br>Venlo, ...</div>
                    </div>
                </v-card-title>

                <v-card>
                    <v-container
                            fluid
                            style="min-height: 0;"
                            grid-list-lg
                    >
                        <v-layout row wrap>
                            <v-flex xs12>
                                <v-card color="cyan darken-2" class="white--text">
                                    <v-container fluid grid-list-lg>
                                        <v-layout row>
                                            <v-flex xs7>
                                                <div>
                                                    <div class="headline">The Vaccum Queen </div>
                                                    <div>February 2018</div>
                                                </div>
                                            </v-flex>
                                            <v-flex xs5>
                                                <v-card-media
                                                        src="assets/001-vacuum-cleaner.svg"
                                                        height="90px"
                                                        contain
                                                ></v-card-media>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card>
                            </v-flex>
                            <v-flex xs12>
                                <v-card color="purple" class="white--text">
                                    <v-container fluid grid-list-lg>
                                        <v-layout row>
                                            <v-flex xs7>
                                                <div>
                                                    <div class="headline">Best CSU Cleaaner Award</div>
                                                    <div> January 2018  </div>
                                                </div>
                                            </v-flex>
                                            <v-flex xs5>
                                                <v-card-media
                                                        src="assets/medal.png   "
                                                        height="90px"
                                                        contain
                                                ></v-card-media>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-card>
        </v-flex>
    </v-layout>
</div>
    <!--<div>-->
    <!--<v-toolbar>-->
    <!--<v-toolbar-title>Welcome</v-toolbar-title>-->
    <!--<v-spacer></v-spacer>-->
    <!--<v-btn icon>-->
    <!--<v-icon>search</v-icon>-->
    <!--</v-btn>-->
    <!--<v-btn icon>-->
    <!--<v-icon>more_vert</v-icon>-->
    <!--</v-btn>-->
    <!--</v-toolbar>-->
    <!--<v-container grid-list-md text-xs-center class="mt-5">-->
    <!--<v-layout row wrap>-->
    <!--<v-flex xs6>-->
    <!--<v-avatar size="75" class="orange">-->
    <!--<v-icon x-large dark>security</v-icon>-->
    <!--</v-avatar>-->
    <!--<p class="mt-3">Level 5</p>-->
    <!--</v-flex>-->
    <!--<v-flex xs6>-->
    <!--<v-avatar size="75" class="indigo">-->
    <!--<v-icon x-large dark>star</v-icon>-->
    <!--</v-avatar>-->
    <!--<p class="mt-3">4.3/5</p>-->
    <!--</v-flex>-->
    <!--</v-layout>-->
    <!--</v-container>-->
    <!--</div>-->
</template>

<style scoped>
star-rating{
    font-size: 0.5em;
}
</style>