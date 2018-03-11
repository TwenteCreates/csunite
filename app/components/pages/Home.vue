<template>
	<div>
		<v-toolbar>
			<v-toolbar-title>CSUnite</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>search</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>more_vert</v-icon>
			</v-btn>
		</v-toolbar>
		<v-container grid-list-md class="mt-4">
			<v-layout row wrap text-xs-center>
				<v-flex xs3>
					<v-avatar size="60" class="orange">
						<v-icon large light>security</v-icon>
					</v-avatar>
					<p class="mt-3 subheading">Level 5</p>
				</v-flex>
				<v-flex xs3>
					<v-avatar size="60" class="pink">
						<v-icon large light>loyalty</v-icon>
					</v-avatar>
					<p class="mt-3 subheading">2 awards</p>
				</v-flex>
				<v-flex xs3>
					<v-avatar size="60" class="green">
						<v-icon large light>thumb_up</v-icon>
					</v-avatar>
					<p class="mt-3 subheading">687 smiles</p>
				</v-flex>
				<v-flex xs3>
					<v-avatar size="60" class="indigo">
						<v-icon large light>star</v-icon>
					</v-avatar>
					<p class="mt-3 subheading">4.3/5</p>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid style="min-height: 0;" grid-list-lg class="recommendations">
			<div class="subtitle mb-1">Recommendations</div>
			<v-layout row wrap>
				<v-flex xs12>
					<v-card color="cyan darken-2" class="white--text">
						<v-container fluid grid-list-lg>
							<v-layout row>
								<v-flex xs7>
									<router-link to="/learn/vacuum">
										<div class="headline">Vacuum Essentials Level 6</div>
										<div class="mt-2">76% complete, 2:23 to go.</div>
									</router-link>
								</v-flex>
								<v-flex xs5>
									<v-card-media
											src="/001-vacuum-cleaner.svg"
											height="90px"
											contain
								></v-card-media>
								</v-flex>
							</v-layout>
						</v-container>
					</v-card>
				</v-flex>
				<v-flex xs12>
					<v-card color="yellow accent-4">
						<v-container fluid grid-list-lg>
							<v-layout row>
								<v-flex xs7>
									<router-link to="/learn/kitchen">
										<div class="headline">Kitchen Chemistry</div>
										<div class="mt-2">Master your skills in cleaning kitchens for restaurants and hotels in this 5-part course.</div>
									</router-link>
								</v-flex>
								<v-flex xs5>
									<v-card-media
											src="/kitchen.png"
											height="90px"
											contain
								></v-card-media>
								</v-flex>
							</v-layout>
						</v-container>
					</v-card>
				</v-flex>
				<v-flex xs12>
					<v-card color="deep-purple white--text">
						<v-container fluid grid-list-lg>
							<v-layout row>
								<v-flex xs7>
									<router-link to="/learn/microfiber">
										<div class="headline">Microfiber, Macropower</div>
										<div class="mt-2">All you need to know in 10 mins.</div>
									</router-link>
								</v-flex>
								<v-flex xs5>
									<v-card-media
											src="/flask.png"
											height="85px"
											contain
								></v-card-media>
								</v-flex>
							</v-layout>
						</v-container>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<style scoped>
	.recommendations a {
		color: inherit;
		text-decoration: none;
	}
</style>