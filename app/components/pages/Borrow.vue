<template>
	<div>
		<v-toolbar>
			<v-toolbar-title>Borrow Equipment</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn to="/accept" flat>
				<v-icon left>close</v-icon>
				Exit
			</v-btn>
		</v-toolbar>
		<v-container>
			<v-card color="blue-grey darken-2" class="white--text">
				<v-card-title primary-title>
					<div class="headline mb-2" style="margin-top: -10px">Your personlized code</div>
					<div>You can take this QR code to the nearest CSU facility or one of our partner stores to rent equipment to help you finish this project Afterwards, you can submit it back to receive your payment.</div>
				</v-card-title>
			</v-card>
			<v-card color="white" class="mt-4 text-xs-center pt-5 pb-4">
				<div>
					<img alt="" src="https://internationalbarcodes.net/wp-content/uploads/2017/04/QR%20code%20example.jpg" style="width: 50%">
					<p class="mt-4" style="letter-spacing: 3px">{{Math.random().toString(36).slice(2).toUpperCase()}}</p>
				</div>
			</v-card>
			<v-card style="padding: 1rem" class="mt-4">
				<div class="headline mb-2">Nearest locations</div>
				<v-list two-line>
					<v-list-tile avatar>
						<v-list-tile-avatar>
							<v-avatar class="green">
								<v-icon light>local_gas_station</v-icon>
							</v-avatar>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>CSU partner location</v-list-tile-title>
							<v-list-tile-sub-title>9 min (4.2 km)</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-divider :inset="true" style="background: #ddd" />
					<v-list-tile avatar>
						<v-list-tile-avatar>
							<v-avatar class="teal">
								<v-icon light>location_city</v-icon>
							</v-avatar>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>CSU 12 min (5.8 km)</v-list-tile-title>
							<v-list-tile-sub-title>Hoevenweg 11A, 5652 AW Eindhoven</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-divider :inset="true" style="background: #ddd" />
					<v-list-tile avatar>
						<v-list-tile-avatar>
							<v-avatar class="green">
								<v-icon light>local_gas_station</v-icon>
							</v-avatar>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>CSU partner location</v-list-tile-title>
							<v-list-tile-sub-title>23 min (10 km)</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</v-card>
		</v-container>
	</div>
</template>

<style scoped>

</style>