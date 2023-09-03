import { Container } from 'react-bootstrap';

import './style.css'

export default function AppHomePage() {
	return (
		<Container>
			<div>
				<div>
					<h1 className="py-5 text-start"><strong>Tagalog Jokes Api</strong></h1>
					<h3 className="text-start"><strong>Introduction</strong></h3>
					<p>This project aims to create a Tagalog Jokes API similar in functionality to well-known APIs such as <a href="https://api-ninjas.com/api/jokes" target="_blank">https://api-ninjas.com/api/jokes</a>, <a href="https://rapidapi.com/KegenGuyll/api/dad-jokes" target="_blank">https://rapidapi.com/KegenGuyll/api/dad-jokes</a>, and <a href="https://rapidapi.com/karanp41-eRiF1pYLK1P/api/world-of-jokes1" target="_blank">https://rapidapi.com/karanp41-eRiF1pYLK1P/api/world-of-jokes1</a>. By developing a custom Tagalog jokes generator, this project aims to provide a reliable source of humorous Tagalog content.</p>
				</div>
				<div>
					<h3 className="pt-2 text-start"><strong>Endpoint 1:</strong></h3>
					<h6 className="pt-3 ms-4"><span className="text-uppercase fw-bold">HTTP Methods:</span> GET</h6>
					<h6 className="ms-4"><span className="text-uppercase fw-bold">URL:</span> https://tagalog-api.onrender.com/jokes</h6>
					<h6 className="ms-4"><span className="text-uppercase fw-bold">Description:</span> This endpoint generates Tagalog jokes, each consisting of four key-value pairs:</h6>
						<p className="ms-5"><li><span className="text-uppercase fw-bold">question:</span> Describes the setup for the Tagalog joke.</li></p>
						<p className="ms-5"><li><span className="text-uppercase fw-bold">answer:</span> Provides the punchline for the joke.</li></p>
						<p className="ms-5"><li><span className="text-uppercase fw-bold">type:</span> Indicates the type or category of the joke.</li></p>
						<p className="ms-5"><li><span className="text-uppercase fw-bold">id:</span> Identifies the corresponding joke.</li></p>
				</div>
				<div>
					<h3 className="pt-2 text-start"><strong>Endpoint 2:</strong></h3>
					<h6 className="pt-3 ms-4"><span className="text-uppercase fw-bold">HTTP Methods:</span> GET</h6>
					<h6 className="ms-4"><span className="text-uppercase fw-bold">URL:</span> `https://tagalog-api.onrender.com/jokes/:jokeId</h6>
					<h6 className="ms-4"><span className="text-uppercase fw-bold">Description:</span> This endpoint provides a specific Tagalog joke with the provided <mark>`:jokeId`</mark> in the URL, with each joke consisting of four key-value pairs:</h6>
						<p className="ms-5"><li><span className="text-uppercase fw-bold">question:</span> Describes the setup for the Tagalog joke.</li></p>
						<p className="ms-5"><li><span className="text-uppercase fw-bold">answer:</span> Provides the punchline for the joke.</li></p>
						<p className="ms-5"><li><span className="text-uppercase fw-bold">type:</span> Indicates the type or category of the joke.</li></p>
						<p className="ms-5"><li><span className="text-uppercase fw-bold">id:</span> Identifies the corresponding joke.</li></p>
				</div>
				<div>
					<h3 className="pt-5 text-start"><strong>Error Handling:</strong></h3>
					<p>The API includes error handling mechanisms to provide informative responses in case of issues or unexpected situations.</p>
					<ol>
						<p className="ms-5">
							<li>
								<span className="fw-bold">getRandomJoke</span>
							</li>
							<ul>
								<li>When requesting a random joke using the `getRandomJoke` endpoint, the following error scenarios can occur:</li>
								<ul>
									<li>If there is an issue with retrieving a random joke, the API will respond with an error message.</li>
									<li>Possible error message: "Failed to fetch a random joke. Please try again later."</li>
								</ul>
							</ul>

							<li>
								<span className="fw-bold">getThisJoke</span>
							</li>
							<ul>
								<li>When attempting to retrieve a specific joke using the `getThisJoke` endpoint, the following error scenarios can occur:</li>
								<ul>
									<li>If the requested joke is not found, the API will respond with an error message indicating that the joke does not exist.</li>
									<li>Possible error message: "Joke not found."</li>
								</ul>
							</ul>
						</p>
					</ol>
					<p>This "Error Handling" section provides an overview of the potential error scenarios and the corresponding error messages that users might encounter when interacting with your API. It helps users understand how your API communicates issues and guides them on how to respond to different error situations.</p>
				</div>
				<div>
					<h3 className="pt-5 text-start"><strong>Disclaimer:</strong></h3>
					<p class="text-justify" className="pt-3">The jokes provided through the Tagalog Jokes API are intended solely for entertainment purposes. They are created to bring humor and amusement to users and should not be taken seriously or as a representation of factual information.</p>
					<p class="text-justify">The jokes may include exaggerations, wordplay, and fictional scenarios designed to elicit laughter and enjoyment. Any resemblance to real events, individuals, or situations is purely coincidental.</p>
					<p class="text-justify">It's important to understand that humor is subjective, and individual preferences for jokes may vary. While we strive to provide a wide range of jokes that cater to different tastes, not all jokes may resonate with every user.</p>
					<p class="text-justify">Users are encouraged to use discretion when sharing jokes and consider the sensibilities and preferences of their audience. Additionally, jokes that may be considered offensive, discriminatory, or inappropriate in any way are not endorsed or promoted by this API.</p>
					<p class="text-justify">We do not endorse any form of discrimination, harm, or disrespect toward any individual or group, and we reserve the right to modify or remove content that violates these principles.</p>
					<p class="text-justify">Remember that the primary goal of the Tagalog Jokes API is to bring joy and laughter. If you have any concerns or feedback regarding the content provided <a href="mailto:carloicorcuera@gmail.com?subject=Disclaimer%20Concern%20about%20Tagalog%20Jokes%20API">contact our support team</a>, we will be happy to assist you.</p>
					<p class="text-justify">Thank you for choosing our API for your entertainment needs, and we hope you enjoy the humour it brings to your day.</p>
				</div>
				<div>
					<h3 className="pt-5 text-start"><strong>FAQ or Troubleshooting:</strong></h3>
					<p>In this section, you can find answers to common questions and solutions to known issues that users might encounter while using the Tagalog Jokes API. If you have a question or problem that is not addressed here, please feel free to contact our support team for assistance.</p>
					<ol>
						<p className="ms-5">
							<li>
								<span className="fw-bold">Q: How do I obtain API credentials for accessing the Tagalog Jokes API?</span>
								<ul>
									<li><span className="fw-bold">A:</span> To obtain API credentials, please refer to Introduction section of this documentation, which provides step-by-step instructions for acquiring the necessary credentials.</li>
								</ul>
							</li>
							<li>
								<span className="fw-bold">Q: What types of jokes are available through the API?</span>
							
								<ul>
									<li><span className="fw-bold">A:</span> The API provides various types or categories of Tagalog jokes.</li>
								</ul>
							</li>
							<li>
								<span className="fw-bold">Q: How often is the API updated with new jokes?</span>
							
								<ul>
									<li><span className="fw-bold">A:</span>The API content may be updated periodically.</li>
								</ul>
							</li>
							<li>
								<span className="fw-bold">Q: I'm receiving a 404 error when trying to access a specific joke. What should I do?</span>
							
								<ul>
									<li><span className="fw-bold">A:</span>If you encounter a 404 error, it means the requested joke with the provided ID does not exist in the database. Double-check the ID and ensure it is valid.</li>
								</ul>
							</li>
							<li>
								<span className="fw-bold">Q: What do I do if I encounter an issue not listed here?</span>
							
								<ul>
									<li><span className="fw-bold">A:</span>If you face an issue or have a question that is not covered in this FAQ, please don't hesitate to <a href="mailto:carloicorcuera@gmail.com?subject=FAQ%20Concern%20about%20Tagalog%20Jokes%20API">contact our support team</a>. We're here to assist you.</li>
								</ul>
							</li>

						</p>
					</ol>
					<p>This FAQ or Troubleshooting section provides answers to common user questions and offers guidance on how to resolve known issues. Users can refer to this section to find solutions to common challenges when working with the Tagalog Jokes API.</p>
				</div>
				<div>
					<h3 className="pt-5 text-start"><strong>Contact Information</strong></h3>
					<p>If you have questions, need assistance, or wish to provide feedback regarding this API, please feel free to contact us: <br/> <a href="mailto:carloicorcuera@gmail.com?subject=FAQ%20Concern%20about%20Tagalog%20Jokes%20API">carloicorcuera@gmail.com</a></p>

					<p>We are here to assist you with any inquiries or support you may require. Please don't hesitate to reach out via email, and we will respond as promptly as possible.</p>
				</div>
			</div>
		</Container>
	)
}