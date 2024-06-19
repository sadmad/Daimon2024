const Twoblock = () => {
  return (
    <>
      <div className="row align-items-md-stretch mt-4">
        <div className="col-md-6 ">
          <div className="h-100 p-5 text-white bg-dark rounded-3 border border-1">
            <h2>Decision Support System (DSS) for marine munitions</h2>
            <p>
              The DAIMON and DAIMON 2 project tool for risk categorization & decision aid the DSS was developed by Clausthal University of Technology in cooperation with EGEOS GmbH and the remaining DAIMON partners. For each detected munition object, the software formulates risk analysis documents, involving facts about the location and overall state of the ammunition, the surrounding environment and state of biological pollution/damage. Furthermore, it recommends possible actions, such as recovery & destruction, accumulation, encapsulation, capping, blasting or non-action, including monitoring and costs thereof.
            </p>
            <a
              className="btn btn-outline-light"
              href="http://www.daimonproject.com/decision-support-system-dss.html"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3 text-dark">
            <h2>Baltic Sea Munitions  Database</h2>
            <p>
              The Clausthal University of Technology in collaboration with Dr. Koehler GmbH has created a specialist software which allows to insert and manage complex data about the Baltic Sea munitions objects.  Munitions experts, scientists and practitioners dealing with Baltic Sea exploration can use the user interface to conveniently input, retrieve or update information on each newly discovered object. The resulting Munitions Database stores detailed information of dumped munitions in a secure environment. 
            </p>
            <a className="btn btn-outline-secondary" 
              href="http://www.daimonproject.com/munitions-database.html"
              target="_blank"
              rel="noopener noreferrer"
              role="button">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Twoblock;
