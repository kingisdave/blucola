import React, { Component } from 'react';

class Workers extends Component {
	
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col mx-auto">
							<h2 className="text-center mt-2">Workers</h2>
							<div className="card border-0 shadow routeCard">
								<div className="card-body mx-auto">
									<center className="mb-2"><small className="text-success">You have successfully added worker to Job</small></center>
									<form className="form-inline">
										<div className="form-group">
											<input className="form-control mr-4" 
												name="Workers"
												placeholder="Add Workers" 
											/>
										</div>
										<div className="form-group">
											<input className="form-control mr-4" 
												name="job"
												placeholder="Add Job" 
											/>
										</div>
										<button type="submit" className="btn moreBtn ml-3 text-white">Add to List</button>
									</form>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="card">
										<div className="card-body">
										<h5>Total Workers</h5>
											<table className="table table-responsive table-striped">
												<thead>
													<tr>
														<th>S/N</th>
														<th>Name</th>
														<th>Specification</th>
														<th>Av. Rating</th>
														<th>Payment</th>
														<th>Operation</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>Tutor T</td>
														<td>Project Super</td>
														<td>5 stars<span className="fa fa-grin-stars"></span></td>
														<td>No</td>
														<td><span className="fa fa-trash text-danger"></span></td>
													</tr>
													<tr>
														<td>2</td>
														<td>Atom Script</td>
														<td>Function</td>
														<td>5 stars<span className="fa fa-grin-stars"></span></td>
														<td>No</td>
														<td><span className="fa fa-trash text-danger "></span></td>
													</tr>
													<tr>
														<td>3</td>
														<td>Black Gee</td>
														<td>Front</td>
														<td>5 stars<span className="fa fa-grin-stars"></span></td>
														<td>No</td>
														<td><span className="fa fa-trash text-danger"></span></td>
													</tr>
													<tr>
														<td>4</td>
														<td>W. Thug CSC</td>
														<td>Function</td>
														<td>5 stars<span className="fa fa-grin-stars"></span></td>
														<td>No</td>
														<td><span className="fa fa-trash text-danger"></span></td>
													</tr>
													<tr>
														<td>5</td>
														<td>Emeka Riddick</td>
														<td>Back</td>
														<td>5 stars<span className="fa fa-grin-stars"></span></td>
														<td>No</td>
														<td><span className="fa fa-trash text-danger "></span></td>
													</tr>
													<tr>
														<td>6</td>
														<td>Dave</td>
														<td>Front</td>
														<td>5 stars<span className="fa fa-grin-stars"></span></td>
														<td>No</td>
														<td><span className="fa fa-trash text-danger "></span></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Workers;