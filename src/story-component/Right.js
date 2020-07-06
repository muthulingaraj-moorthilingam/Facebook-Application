import React from 'react';
import '../story.css';
export class Right extends React.Component{
	render(){
		return(
			<div style={{width:"100%"}} className="parent-SAP">
				<div>
					<div>
						<div>
							<div className="create-story-type">
								<div className="add-SPS add-Photo">
									<div className="add-poto-story photo"></div>
									<div className="add-poto-story-name">
									{"Add photo"}
									</div>
								</div>
								<div className="add-SPS add-Story">
									<div className="add-poto-story story">
										<div className="bg"></div>
									</div>
									<div className="add-poto-story-name">
									{"Add Text story"}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}