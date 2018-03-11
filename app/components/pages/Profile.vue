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
					<h2 class="mt-3">Leslie Knope</h2>
					<div class="mt-2 mb-4 amber--text">
						<v-icon>star</v-icon>
						<v-icon>star</v-icon>
						<v-icon>star</v-icon>
						<v-icon>star</v-icon>
						<v-icon>star_half</v-icon>
					</div>
				</div>
				<v-container fluid style="min-height: 0;" grid-list-lg>
					<div class="subtitle mb-1">My Awards</div>
					<v-layout row wrap>
						<v-flex xs12>
							<v-card color="cyan darken-2" class="white--text">
								<v-container fluid grid-list-lg>
									<v-layout row>
										<v-flex xs7>
											<div>
												<div class="headline">The Vaccum Queen </div>
												<div class="mt-2">February 2018</div>
											</div>
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
							<v-card color="purple" class="white--text">
								<v-container fluid grid-list-lg>
									<v-layout row>
										<v-flex xs7>
											<div>
												<div class="headline">Best CSU Cleaner Award</div>
												<div class="mt-2">September 2017</div>
											</div>
										</v-flex>
										<v-flex xs5>
											<v-card-media
													src="/medal.png"
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