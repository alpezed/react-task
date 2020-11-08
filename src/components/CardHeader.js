import styles from './Card.module.css';

const CardHeader = props => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>
        Tasks
        {/* <span class={styles.count}>2</span> */}
      </h2>
      <button
        className={styles.addButton}
        onClick={() => props.onAddTask(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
          className={styles.addButtonIcon}
        >
          <path
            fill="currentColor"
            d="M21.679 15.25H16.75v-4.929a.322.322 0 0 0-.321-.321h-.858a.322.322 0 0 0-.321.321v4.929h-4.929a.322.322 0 0 0-.321.321v.858c0 .176.145.321.321.321h4.929v4.929c0 .176.145.321.321.321h.858a.322.322 0 0 0 .321-.321V16.75h4.929a.322.322 0 0 0 .321-.321v-.858a.322.322 0 0 0-.321-.321z"
          />
        </svg>
      </button>
    </header>
  );
};

export default CardHeader;
