import React from 'react'

export function ActionSheetAddBalance() {
   return (
      <div className="modal fade action-sheet" id="depositActionSheet" tabIndex={-1} role="dialog">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title">Add Balance</h5>
               </div>
               <div className="modal-body">
                  <div className="action-sheet-content">
                     <form>
                        <div className="form-group basic">
                           <div className="input-wrapper">
                              <label className="label" htmlFor="account1">From</label>
                              <select className="form-control custom-select" id="account1">
                                 <option value={0}>Savings (*** 5019)</option>
                                 <option value={1}>Investment (*** 6212)</option>
                                 <option value={2}>Mortgage (*** 5021)</option>
                              </select>
                           </div>
                        </div>
                        <div className="form-group basic">
                           <label className="label">Enter Amount</label>
                           <div className="input-group mb-2">
                              <span className="input-group-text" id="basic-addona1">$</span>
                              <input type="text" className="form-control" placeholder="Enter an amount" defaultValue={100} />
                           </div>
                        </div>
                        <div className="form-group basic">
                           <button type="button" className="btn btn-primary btn-block btn-lg" data-bs-dismiss="modal">Deposit</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export function ActionSheetWithdraw() {
   return (
      <div className="modal fade action-sheet" id="withdrawActionSheet" tabIndex={-1} role="dialog">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title">Withdraw Money</h5>
               </div>
               <div className="modal-body">
                  <div className="action-sheet-content col-md-6 offset-md-3">
                     <form>
                        <div className="form-group basic">
                           <div className="input-wrapper">
                              <label className="label" htmlFor="account2d">From</label>
                              <select className="form-control custom-select" id="account2d">
                                 <option value={0}>Savings (*** 5019)</option>
                                 <option value={1}>Investment (*** 6212)</option>
                                 <option value={2}>Mortgage (*** 5021)</option>
                              </select>
                           </div>
                        </div>
                        <div className="form-group basic">
                           <div className="input-wrapper">
                              <label className="label" htmlFor="text11d">To</label>
                              <input type="email" className="form-control" id="text11d" placeholder="Enter IBAN" />
                              <i className="clear-input">
                                 <ion-icon name="close-circle" />
                              </i>
                           </div>
                        </div>
                        <div className="form-group basic">
                           <label className="label">Enter Amount</label>
                           <div className="input-group mb-2">
                              <span className="input-group-text" id="basic-addonb1">$</span>
                              <input type="text" className="form-control" placeholder="Enter an amount" defaultValue={100} />
                           </div>
                        </div>
                        <div className="form-group basic">
                           <button type="button" className="btn btn-primary btn-block btn-lg" data-bs-dismiss="modal">Withdraw</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export function ActionSheetSendMoney() {
   return (
      <div className="modal fade action-sheet" id="sendActionSheet" tabIndex={-1} role="dialog">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title">Send Money</h5>
               </div>
               <div className="modal-body">
                  <div className="action-sheet-content">
                     <form>
                        <div className="form-group basic">
                           <div className="input-wrapper">
                              <label className="label" htmlFor="account2">From</label>
                              <select className="form-control custom-select" id="account2">
                                 <option value={0}>Savings (*** 5019)</option>
                                 <option value={1}>Investment (*** 6212)</option>
                                 <option value={2}>Mortgage (*** 5021)</option>
                              </select>
                           </div>
                        </div>
                        <div className="form-group basic">
                           <div className="input-wrapper">
                              <label className="label" htmlFor="text11">To</label>
                              <input type="email" className="form-control" id="text11" placeholder="Enter bank ID" />
                              <i className="clear-input">
                                 <ion-icon name="close-circle" />
                              </i>
                           </div>
                        </div>
                        <div className="form-group basic">
                           <label className="label">Enter Amount</label>
                           <div className="input-group mb-2">
                              <span className="input-group-text" id="basic-addon1">$</span>
                              <input type="text" className="form-control" placeholder="Enter an amount" defaultValue={100} />
                           </div>
                        </div>
                        <div className="form-group basic">
                           <button type="button" className="btn btn-primary btn-block btn-lg" data-bs-dismiss="modal">Send</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export function ActionSheetExchangeMoney() {
   return (
      <div className="modal fade action-sheet" id="exchangeActionSheet" tabIndex={-1} role="dialog">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title">Exchange Money</h5>
               </div>
               <div className="modal-body">
                  <div className="action-sheet-content">
                     <form>
                        <div className="row">
                           <div className="col-6">
                              <div className="form-group basic">
                                 <div className="input-wrapper">
                                    <label className="label" htmlFor="currency1">From</label>
                                    <select className="form-control custom-select" id="currency1">
                                       <option value={1}>EUR</option>
                                       <option value={2}>USD</option>
                                       <option value={3}>AUD</option>
                                       <option value={4}>CAD</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                           <div className="col-6">
                              <div className="form-group basic">
                                 <div className="input-wrapper">
                                    <label className="label" htmlFor="currency2">To</label>
                                    <select className="form-control custom-select" id="currency2">
                                       <option value={1}>USD</option>
                                       <option value={1}>EUR</option>
                                       <option value={2}>AUD</option>
                                       <option value={3}>CAD</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="form-group basic">
                           <label className="label">Enter Amount</label>
                           <div className="input-group mb-2">
                              <span className="input-group-text" id="basic-addon2">$</span>
                              <input type="text" className="form-control" placeholder="Enter an amount" defaultValue={100} />
                           </div>
                        </div>
                        <div className="form-group basic">
                           <button type="button" className="btn btn-primary btn-block btn-lg" data-bs-dismiss="modal">Exchange</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
