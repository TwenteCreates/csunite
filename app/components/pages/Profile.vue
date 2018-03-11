<template xmlns="http://www.w3.org/1999/html">
	<div>
		<v-toolbar>
			<v-toolbar-title>Profile</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn to="/inclusion">
				<v-icon left>accessibility</v-icon>Inclusion
			</v-btn>
		</v-toolbar>
		<v-layout>
			<v-flex xs12>
				<div class="text-xs-center mt-4">
					<v-avatar size="100" class="grey lighten-4">
						<img src="https://randomuser.me/api/portraits/women/24.jpg" alt="">
					</v-avatar>
					<div class="mt-4 mb-4">
						<v-icon>star</v-icon>
						<v-icon>star</v-icon>
						<v-icon>star</v-icon>
						<v-icon>star</v-icon>
						<v-icon>star_half</v-icon>
					</div>
				</div>
				<v-container fluid style="min-height: 0;" grid-list-lg>
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
												<div class="headline">Best CSU Cleaner Award</div>
												<div>September 2017</div>
											</div>
										</v-flex>
										<v-flex xs5>
											<v-card-media
													src="assets/medal.png"
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
			</v-flex>
		</v-layout>
	</div>
</template>

<style scoped>
star-rating{
	font-size: 0.5em;
}
</style>