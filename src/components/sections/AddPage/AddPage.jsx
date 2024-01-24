import './addpage.style.css'

function AddPage() {
  return (
    <section className='add-page'>
        <div className="add-card rounded d-flex flex-column justify-content-start align-items-start w-100">
            <h4>Add your own</h4>
            <p className='mt-4 mb-4'>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
            <button type="button" class="btn btn-outline-primary">Primary</button>
        </div>
    </section>
  )
}

export default AddPage