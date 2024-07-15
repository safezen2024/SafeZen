import React from "react";
import { Link } from "react-router-dom";

export default function PricePlans() {
	return (
		<div class="card-deck mb-3 text-center">
			<div class="card mb-4 box-shadow">
				<div class="card-header">
					<h4 class="my-0 font-weight-normal">EXPLORE</h4>
				</div>
				<div class="card-body">
					<h1 class="card-title pricing-card-title mb-4">
						Rs.899
						{/* <small class="text-muted">/ session</small> */}
					</h1>
					<h4>1 Session</h4>
					<ul class="list-unstyled mt-3 mb-4">
						<li>Talk Openly</li>
						<li>Address Your Concerns</li>
						<li>Make a plan with your therapist</li>
					</ul>
					<Link to="/appointment-page1">
						<button type="button" class="btn btn-lg btn-block">
							Get Therapy
						</button>
					</Link>
				</div>
			</div>
			<div class="card mb-4 box-shadow">
				<div class="card-header">
					<h4 class="my-0 font-weight-normal">INTROSPECT</h4>
				</div>
				<div class="card-body">
					<h1 class="card-title pricing-card-title mb-4">
						Rs.2429 <small class="text-muted">(*10% off)</small>
					</h1>
					<h4>3 Sessions</h4>
					<ul class="list-unstyled mt-3 mb-4">
						<li>Notice how you think</li>
						<li>Break negative thought Loops</li>
						<li>Start positive ones</li>
					</ul>
					<Link to="/appointment-page2">
						<button type="button" class="btn btn-lg btn-block btn-sign-up">
							Get Therapy
						</button>
					</Link>
				</div>
			</div>
			<div class="card mb-4 box-shadow">
				<div class="card-header">
					<h4 class="my-0 font-weight-normal">BLISS</h4>
				</div>
				<div class="card-body">
					<h1 class="card-title pricing-card-title mb-4">
						Rs.9199 <small class="text-muted">(*15% off)</small>
					</h1>
					<h4>12 Sessions</h4>
					<ul class="list-unstyled mt-3 mb-4">
						<li>Start making changes in your behaviour</li>
						<li>Learn how to manage your thoughts</li>
						<li>Learn how to manage your emotions</li>
					</ul>
					<Link to="/appointment-page3">
						<button type="button" class="btn btn-lg btn-block btn-sign-up">
							Get Therapy
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
