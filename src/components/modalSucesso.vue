<template>
  <div
    class="modal fade"
    id="modalSuccess"
    tabindex="-1"
    aria-labelledby="modalSuccessLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalSuccessLabel">Sucesso!</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">{{ msg }}</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ref from 'vue';


</script>