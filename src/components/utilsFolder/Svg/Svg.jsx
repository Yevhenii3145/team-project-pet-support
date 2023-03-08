import scss from './svg.module.scss';

const SvgInsert = ({ id }) => {
  switch (id) {
    case 'icon-logo':
      return (
        <svg
          id="icon-logo"
          viewBox="0 0 89 32"
          width="88"
          height="42px"
          className={scss.logo}
        >
          <path
            fill="#000"
            d="M6.095 8.373c0.515-0.803 1.226-1.452 2.132-1.946s1.967-0.742 3.182-0.742c1.421 0 2.709 0.36 3.862 1.081s2.060 1.751 2.719 3.090c0.68 1.339 1.020 2.894 1.020 4.665s-0.34 3.337-1.020 4.696c-0.659 1.339-1.565 2.379-2.719 3.121-1.153 0.721-2.441 1.081-3.862 1.081-1.195 0-2.255-0.247-3.182-0.742-0.906-0.494-1.617-1.133-2.132-1.916v10.628h-5.283v-25.459h5.283v2.441zM13.634 14.521c0-1.318-0.371-2.348-1.112-3.090-0.721-0.762-1.617-1.143-2.688-1.143-1.050 0-1.946 0.381-2.688 1.143-0.721 0.762-1.081 1.802-1.081 3.121s0.36 2.358 1.081 3.121c0.742 0.762 1.638 1.143 2.688 1.143s1.946-0.381 2.688-1.143c0.742-0.783 1.112-1.833 1.112-3.151zM40.196 14.274c0 0.494-0.031 1.009-0.093 1.545h-11.957c0.082 1.071 0.422 1.895 1.020 2.472 0.618 0.556 1.37 0.834 2.255 0.834 1.318 0 2.235-0.556 2.75-1.668h5.623c-0.288 1.133-0.814 2.152-1.576 3.059-0.742 0.906-1.679 1.617-2.812 2.132s-2.4 0.772-3.8 0.772c-1.689 0-3.193-0.36-4.511-1.081s-2.348-1.751-3.090-3.090c-0.742-1.339-1.112-2.904-1.112-4.696s0.36-3.357 1.081-4.696c0.742-1.339 1.771-2.369 3.090-3.090s2.832-1.081 4.542-1.081c1.668 0 3.151 0.35 4.449 1.050s2.307 1.699 3.028 2.997c0.742 1.298 1.112 2.812 1.112 4.542zM34.789 12.884c0-0.906-0.309-1.627-0.927-2.163s-1.39-0.803-2.317-0.803c-0.886 0-1.638 0.257-2.255 0.772-0.597 0.515-0.968 1.246-1.112 2.194h6.612zM65.144 0.309v22.863h-5.283v-22.863h5.283zM88.747 5.932l-10.814 25.428h-5.685l3.955-8.775-7.014-16.653h5.901l3.986 10.783 3.955-10.783h5.716z"
          ></path>
          <path
            fill="#f59256"
            d="M54.755 18.692v4.48h-2.688c-1.916 0-3.409-0.463-4.48-1.39-1.071-0.948-1.607-2.482-1.607-4.604v-6.859h-2.101v-4.387h2.101v-4.202h5.283v4.202h3.46v4.387h-3.46v6.921c0 0.515 0.124 0.886 0.371 1.112s0.659 0.34 1.236 0.34h1.885z"
          ></path>
        </svg>
      );

    case 'icon-menu-open':
      return (
        <svg
          id="icon-menu-open"
          viewBox="0 0 48 32"
          width="40"
          height="40"
          className={scss.openMenu}
        >
          <path d="M0 29.333c0 1.473 1.194 2.667 2.667 2.667h42.667c1.473 0 2.667-1.194 2.667-2.667s-1.194-2.667-2.667-2.667h-42.667c-1.473 0-2.667 1.194-2.667 2.667zM0 16c0 1.473 1.194 2.667 2.667 2.667h42.667c1.473 0 2.667-1.194 2.667-2.667s-1.194-2.667-2.667-2.667h-42.667c-1.473 0-2.667 1.194-2.667 2.667zM2.667 0c-1.473 0-2.667 1.194-2.667 2.667s1.194 2.667 2.667 2.667h42.667c1.473 0 2.667-1.194 2.667-2.667s-1.194-2.667-2.667-2.667h-42.667z"></path>
        </svg>
      );

    case 'icon-edit':
      return (
        <svg
          id="icon-edit"
          viewBox="0 0 32 32"
          width="20"
          height="20"
          className={scss.iconEdit}
        >
          <path
            fill="#F59256"
            d="M6.976 26.214c-0.165-0-0.328-0.035-0.48-0.102s-0.287-0.164-0.398-0.286c-0.113-0.121-0.2-0.264-0.254-0.421s-0.074-0.323-0.059-0.488l0.292-3.207 13.474-13.469 4.211 4.21-13.47 13.468-3.207 0.292c-0.036 0.003-0.072 0.005-0.108 0.005zM24.603 11.608l-4.21-4.21 2.525-2.525c0.111-0.111 0.242-0.199 0.386-0.258s0.299-0.091 0.456-0.091c0.156 0 0.311 0.031 0.456 0.091s0.276 0.148 0.387 0.258l2.525 2.525c0.111 0.111 0.199 0.242 0.259 0.386s0.091 0.299 0.091 0.456c0 0.156-0.031 0.311-0.091 0.456s-0.148 0.276-0.259 0.386l-2.525 2.525z"
          ></path>
        </svg>
      );
    case 'icon-edit-active':
      return (
        <svg
          id="icon-edit"
          viewBox="0 0 32 32"
          width="20"
          height="20"
          className={scss.iconEdit_active}
        >
          <path
            fill="#111111;"
            d="M6.976 26.214c-0.165-0-0.328-0.035-0.48-0.102s-0.287-0.164-0.398-0.286c-0.113-0.121-0.2-0.264-0.254-0.421s-0.074-0.323-0.059-0.488l0.292-3.207 13.474-13.469 4.211 4.21-13.47 13.468-3.207 0.292c-0.036 0.003-0.072 0.005-0.108 0.005zM24.603 11.608l-4.21-4.21 2.525-2.525c0.111-0.111 0.242-0.199 0.386-0.258s0.299-0.091 0.456-0.091c0.156 0 0.311 0.031 0.456 0.091s0.276 0.148 0.387 0.258l2.525 2.525c0.111 0.111 0.199 0.242 0.259 0.386s0.091 0.299 0.091 0.456c0 0.156-0.031 0.311-0.091 0.456s-0.148 0.276-0.259 0.386l-2.525 2.525z"
          ></path>
        </svg>
      );

    case 'icon-done':
      return (
        <svg
          id="icon-done"
          viewBox="0 0 32 32"
          width="20"
          height="20"
          className={scss.iconDone}
        >
          <path
            fill="#F59256"
            d="M26.976 5.252c0.923 0.879 0.959 2.34 0.080 3.263l-14.646 15.385c-0.436 0.458-1.040 0.716-1.671 0.716s-1.236-0.259-1.671-0.716l-6.892-7.24c-0.879-0.923-0.843-2.384 0.080-3.263s2.384-0.843 3.263 0.080l5.221 5.484 12.975-13.629c0.879-0.923 2.339-0.959 3.263-0.080z"
          ></path>
        </svg>
      );

    case 'icon-search':
      return (
        <svg
          id="icon-search"
          viewBox="0 0 32 32"
          width="25"
          height="25"
          className={scss.search}
        >
          <path d="M20.667 18.667h-1.053l-0.373-0.36c1.307-1.52 2.093-3.493 2.093-5.64 0-4.787-3.88-8.667-8.667-8.667s-8.667 3.88-8.667 8.667c0 4.787 3.88 8.667 8.667 8.667 2.147 0 4.12-0.787 5.64-2.093l0.36 0.373v1.053l6.667 6.653 1.987-1.987-6.653-6.667zM12.667 18.667c-3.32 0-6-2.68-6-6s2.68-6 6-6c3.32 0 6 2.68 6 6s-2.68 6-6 6z"></path>
        </svg>
      );
      case 'icon-search-exit':
        return (
          <svg
            id="icon-search-exit"
            viewBox="0 0 32 32"
            width="20"
            height="20"
            className={scss.search}
          >
            <path d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"></path>
          </svg>
        );
    case 'icon-search-news':
      return (
        <svg
          id="icon-search-news"
          viewBox="0 0 32 32"
          width="20"
          height="20"
          className={scss.search_news}
        >
          <path d="M20.667 18.667h-1.053l-0.373-0.36c1.307-1.52 2.093-3.493 2.093-5.64 0-4.787-3.88-8.667-8.667-8.667s-8.667 3.88-8.667 8.667c0 4.787 3.88 8.667 8.667 8.667 2.147 0 4.12-0.787 5.64-2.093l0.36 0.373v1.053l6.667 6.653 1.987-1.987-6.653-6.667zM12.667 18.667c-3.32 0-6-2.68-6-6s2.68-6 6-6c3.32 0 6 2.68 6 6s-2.68 6-6 6z"></path>
        </svg>
      );

    case 'icon-logout':
      return (
        <svg
          id="icon-logout"
          viewBox="0 0 32 32"
          width="18"
          height="18"
          className={scss.logout}
        >
          <path
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="4"
            strokeWidth="1.7778"
            d="M27.209 11.682l0-0c0.141-0.141 0.369-0.141 0.511 0l2.799 2.799c0.871 0.871 0.871 2.291 0 3.162l-2.799 2.799c-0.071 0.071-0.162 0.106-0.255 0.106s-0.184-0.035-0.255-0.106h-0c-0.141-0.141-0.141-0.369 0-0.51l3.508-3.509h-17.155c-0.2 0-0.361-0.162-0.361-0.361s0.162-0.361 0.361-0.361h17.155l-3.508-3.509c-0.141-0.141-0.141-0.369 0-0.51zM21.736 24.5v2.5c0 2.266-1.845 4.111-4.111 4.111h-12.563c-2.266 0-4.111-1.845-4.111-4.111v-22c0-2.266 1.845-4.111 4.111-4.111h12.563c2.266 0 4.111 1.845 4.111 4.111v2.5c0 0.2-0.162 0.361-0.361 0.361s-0.361-0.162-0.361-0.361v-2.5c0-1.869-1.519-3.389-3.389-3.389h-12.563c-1.869 0-3.389 1.52-3.389 3.389v22c0 1.869 1.52 3.389 3.389 3.389h12.563c1.869 0 3.389-1.52 3.389-3.389v-2.5c0-0.199 0.162-0.361 0.361-0.361s0.361 0.162 0.361 0.361z"
          ></path>
        </svg>
      );

    case 'icon-close':
      return (
        //         <svg id="icon-close" viewBox="0 0 32 32" className={scss.iconClose}>

        <svg
          id="icon-close"
          viewBox="0 0 32 32"
          width="20"
          height="20"
          className={scss.iconClose}
        >
          <path d="M18.193 15.999l12.896-12.896c0.255-0.298 0.388-0.68 0.373-1.072s-0.178-0.763-0.455-1.040-0.648-0.439-1.040-0.454c-0.392-0.015-0.774 0.118-1.072 0.373l-12.895 12.896-12.896-12.911c-0.293-0.293-0.69-0.457-1.104-0.457s-0.812 0.165-1.104 0.457c-0.293 0.293-0.457 0.69-0.457 1.104s0.165 0.812 0.457 1.104l12.911 12.896-12.911 12.896c-0.163 0.139-0.295 0.311-0.388 0.504s-0.146 0.403-0.154 0.617c-0.008 0.214 0.028 0.428 0.106 0.628s0.197 0.381 0.348 0.532c0.152 0.152 0.333 0.27 0.532 0.348s0.413 0.114 0.627 0.106c0.214-0.008 0.424-0.061 0.617-0.154s0.365-0.226 0.504-0.388l12.911-12.896 12.895 12.896c0.298 0.255 0.68 0.388 1.072 0.373s0.763-0.177 1.040-0.454 0.439-0.648 0.455-1.040c0.015-0.391-0.118-0.774-0.373-1.072l-12.896-12.896z"></path>
        </svg>
      );

    case 'icon-close-add-notice':
      return (
        <svg
          id="icon-close-add-notice"
          viewBox="0 0 32 32"
          className={scss.iconCloseAddNotice}
          width="20"
          height="20"
        >
          <path d="M18.193 15.999l12.896-12.896c0.255-0.298 0.388-0.68 0.373-1.072s-0.178-0.763-0.455-1.040-0.648-0.439-1.040-0.454c-0.392-0.015-0.774 0.118-1.072 0.373l-12.895 12.896-12.896-12.911c-0.293-0.293-0.69-0.457-1.104-0.457s-0.812 0.165-1.104 0.457c-0.293 0.293-0.457 0.69-0.457 1.104s0.165 0.812 0.457 1.104l12.911 12.896-12.911 12.896c-0.163 0.139-0.295 0.311-0.388 0.504s-0.146 0.403-0.154 0.617c-0.008 0.214 0.028 0.428 0.106 0.628s0.197 0.381 0.348 0.532c0.152 0.152 0.333 0.27 0.532 0.348s0.413 0.114 0.627 0.106c0.214-0.008 0.424-0.061 0.617-0.154s0.365-0.226 0.504-0.388l12.911-12.896 12.895 12.896c0.298 0.255 0.68 0.388 1.072 0.373s0.763-0.177 1.040-0.454 0.439-0.648 0.455-1.040c0.015-0.391-0.118-0.774-0.373-1.072l-12.896-12.896z"></path>
        </svg>
      );

    case 'icon-add-avatar':
      return (
        <svg
          id="icon-add-avatar"
          viewBox="0 0 31 32"
          className={scss.iconAddAvatar}
        >
          <path
            stroke="#111"
            strokeLinejoin="miter"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="1.2308"
            d="M15.385 30.879v-14.948M15.385 15.931v-14.948M15.385 15.931h14.769M15.385 15.931h-14.769"
          ></path>
        </svg>
      );

    case 'icon-male':
      return (
        <svg id="icon-male" viewBox="0 0 32 32" className={scss.male}>
          <path
            fill="#23c2ef"
            d="M21.199 0c-0.982 0-1.778 0.796-1.778 1.778v0.9c0 0.982 0.796 1.778 1.778 1.778h3.115l-6.45 6.367c-1.81-1.164-3.967-1.839-6.283-1.839-6.396 0-11.581 5.152-11.581 11.508s5.186 11.509 11.581 11.509c6.396 0 11.58-5.153 11.58-11.509 0-2.416-0.749-4.658-2.029-6.509l6.342-6.302v3.042c0 0.982 0.796 1.778 1.778 1.778h0.928c0.982 0 1.778-0.796 1.78-1.777 0.008-2.891 0.030-6.059 0.037-8.945 0.002-0.982-0.794-1.777-1.775-1.777h-9.023zM11.581 13.615c3.822 0 6.919 3.078 6.919 6.876s-3.097 6.877-6.919 6.877c-3.822 0-6.92-3.079-6.92-6.877s3.098-6.876 6.92-6.876z"
          ></path>
        </svg>
      );

    case 'icon-female':
      return (
        <svg id="icon-female" viewBox="0 0 21 32" className={scss.male}>
          <path
            fill="#ff8787"
            d="M10.4 0c-5.676 0-10.279 4.603-10.279 10.279 0 4.546 2.953 8.403 7.044 9.759 0.728 0.241 1.277 0.887 1.277 1.654v0.388c0 0.884-0.716 1.6-1.6 1.6h-1.208c-0.884 0-1.6 0.716-1.6 1.6v0.713c0 0.884 0.716 1.6 1.6 1.6h1.208c0.884 0 1.6 0.716 1.6 1.6v1.206c0 0.884 0.716 1.6 1.6 1.6h0.713c0.884 0 1.6-0.716 1.6-1.6v-1.206c0-0.884 0.716-1.6 1.6-1.6h1.208c0.884 0 1.6-0.716 1.6-1.6v-0.713c0-0.884-0.716-1.6-1.6-1.6h-1.208c-0.884 0-1.6-0.716-1.6-1.6v-1.709c4.741-0.914 8.323-5.085 8.323-10.093 0-5.676-4.603-10.279-10.279-10.279zM10.4 4.087c3.42 0 6.192 2.772 6.192 6.192s-2.772 6.192-6.192 6.192-6.192-2.772-6.192-6.192c0-3.419 2.772-6.192 6.192-6.192z"
          ></path>
        </svg>
      );

    case 'icon-account':
      return (
        <svg
          id="icon-account"
          viewBox="0 0 32 32"
          width="20"
          height="20"
          className={scss.iconAccount}
        >
          <path d="M16 1.186c-8.178 0-14.815 6.637-14.815 14.815s6.637 14.815 14.815 14.815c8.178 0 14.815-6.637 14.815-14.815s-6.637-14.815-14.815-14.815zM16 7.112c2.859 0 5.185 2.326 5.185 5.185s-2.326 5.185-5.185 5.185c-2.859 0-5.185-2.326-5.185-5.185s2.326-5.185 5.185-5.185zM16 27.852c-3.007 0-6.563-1.215-9.096-4.267 2.595-2.036 5.798-3.143 9.096-3.143s6.501 1.107 9.096 3.143c-2.533 3.052-6.089 4.267-9.096 4.267z"></path>
        </svg>
      );

    case 'icon-delete':
      return (
        <svg
          id="icon-delete"
          viewBox="0 0 29 32"
          width="20"
          height="20"
          className={scss.iconDelete}
        >
          <path d="M12.364 5.091h4.364c0-0.579-0.23-1.134-0.639-1.543s-0.964-0.639-1.543-0.639c-0.579 0-1.134 0.23-1.543 0.639s-0.639 0.964-0.639 1.543zM10.182 5.091c0-1.157 0.46-2.267 1.278-3.086s1.928-1.278 3.086-1.278c1.157 0 2.267 0.46 3.086 1.278s1.278 1.928 1.278 3.086h8.727c0.289 0 0.567 0.115 0.771 0.32s0.32 0.482 0.32 0.771-0.115 0.567-0.32 0.771c-0.204 0.205-0.482 0.32-0.771 0.32h-1.231l-2.629 19.283c-0.178 1.307-0.824 2.505-1.818 3.372s-2.268 1.345-3.587 1.345h-7.654c-1.319 0-2.593-0.478-3.587-1.345s-1.639-2.065-1.818-3.372l-2.629-19.283h-1.231c-0.289 0-0.567-0.115-0.771-0.32s-0.32-0.482-0.32-0.771c0-0.289 0.115-0.567 0.32-0.771s0.482-0.32 0.771-0.32h8.727zM12.364 12.727c0-0.289-0.115-0.567-0.32-0.771s-0.482-0.32-0.771-0.32c-0.289 0-0.567 0.115-0.771 0.32s-0.32 0.482-0.32 0.771v10.909c0 0.289 0.115 0.567 0.32 0.771s0.482 0.32 0.771 0.32 0.567-0.115 0.771-0.32c0.205-0.204 0.32-0.482 0.32-0.771v-10.909zM17.818 11.636c-0.289 0-0.567 0.115-0.771 0.32s-0.32 0.482-0.32 0.771v10.909c0 0.289 0.115 0.567 0.32 0.771s0.482 0.32 0.771 0.32 0.567-0.115 0.771-0.32c0.205-0.204 0.32-0.482 0.32-0.771v-10.909c0-0.289-0.115-0.567-0.32-0.771s-0.482-0.32-0.771-0.32z"></path>
        </svg>
      );
        case 'icon-deletepet':
      return (
        <svg
          id="icon-deletepet"
          viewBox="0 0 29 32"
          width="20"
          height="20"
          className={scss.iconDelete_pet}
        >
          <path fill="#111111;" d="M12.364 5.091h4.364c0-0.579-0.23-1.134-0.639-1.543s-0.964-0.639-1.543-0.639c-0.579 0-1.134 0.23-1.543 0.639s-0.639 0.964-0.639 1.543zM10.182 5.091c0-1.157 0.46-2.267 1.278-3.086s1.928-1.278 3.086-1.278c1.157 0 2.267 0.46 3.086 1.278s1.278 1.928 1.278 3.086h8.727c0.289 0 0.567 0.115 0.771 0.32s0.32 0.482 0.32 0.771-0.115 0.567-0.32 0.771c-0.204 0.205-0.482 0.32-0.771 0.32h-1.231l-2.629 19.283c-0.178 1.307-0.824 2.505-1.818 3.372s-2.268 1.345-3.587 1.345h-7.654c-1.319 0-2.593-0.478-3.587-1.345s-1.639-2.065-1.818-3.372l-2.629-19.283h-1.231c-0.289 0-0.567-0.115-0.771-0.32s-0.32-0.482-0.32-0.771c0-0.289 0.115-0.567 0.32-0.771s0.482-0.32 0.771-0.32h8.727zM12.364 12.727c0-0.289-0.115-0.567-0.32-0.771s-0.482-0.32-0.771-0.32c-0.289 0-0.567 0.115-0.771 0.32s-0.32 0.482-0.32 0.771v10.909c0 0.289 0.115 0.567 0.32 0.771s0.482 0.32 0.771 0.32 0.567-0.115 0.771-0.32c0.205-0.204 0.32-0.482 0.32-0.771v-10.909zM17.818 11.636c-0.289 0-0.567 0.115-0.771 0.32s-0.32 0.482-0.32 0.771v10.909c0 0.289 0.115 0.567 0.32 0.771s0.482 0.32 0.771 0.32 0.567-0.115 0.771-0.32c0.205-0.204 0.32-0.482 0.32-0.771v-10.909c0-0.289-0.115-0.567-0.32-0.771s-0.482-0.32-0.771-0.32z"></path>
        </svg>
      );

    case 'icon-heart':
      return (
        <svg id="icon-heart" viewBox="0 0 35 32" width="24" height="22">
          <path d="M9.333 1.333c-4.418 0-8 3.645-8 8.142 0 3.63 1.4 12.246 15.181 20.955 0.247 0.154 0.53 0.236 0.819 0.236s0.572-0.082 0.819-0.236c13.781-8.709 15.181-17.325 15.181-20.955 0-4.497-3.582-8.142-8-8.142s-8 4.935-8 4.935c0 0-3.582-4.935-8-4.935z"></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6667"
            d="M9.333 1.333c-4.418 0-8 3.645-8 8.142 0 3.63 1.4 12.246 15.181 20.955 0.247 0.154 0.53 0.236 0.819 0.236s0.572-0.082 0.819-0.236c13.781-8.709 15.181-17.325 15.181-20.955 0-4.497-3.582-8.142-8-8.142s-8 4.935-8 4.935c0 0-3.582-4.935-8-4.935z"
          ></path>
        </svg>
      );
    case 'icon-heart-favorite':
      return (
        <svg
          id="icon-heart"
          viewBox="0 0 35 32"
          width="16"
          height="16"
          className={scss.heart_favorite}
        >
          <path d="M9.333 1.333c-4.418 0-8 3.645-8 8.142 0 3.63 1.4 12.246 15.181 20.955 0.247 0.154 0.53 0.236 0.819 0.236s0.572-0.082 0.819-0.236c13.781-8.709 15.181-17.325 15.181-20.955 0-4.497-3.582-8.142-8-8.142s-8 4.935-8 4.935c0 0-3.582-4.935-8-4.935z"></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6667"
            d="M9.333 1.333c-4.418 0-8 3.645-8 8.142 0 3.63 1.4 12.246 15.181 20.955 0.247 0.154 0.53 0.236 0.819 0.236s0.572-0.082 0.819-0.236c13.781-8.709 15.181-17.325 15.181-20.955 0-4.497-3.582-8.142-8-8.142s-8 4.935-8 4.935c0 0-3.582-4.935-8-4.935z"
          ></path>
        </svg>
      );
    case 'icon-add-pet':
      return (
        <svg
          id="icon-add-pet"
          viewBox="0 0 32 32"
          width="24"
          height="24"
          className={scss.iconAddPet}
        >
          <path fill="#fff" d="M16 30.222v0zM16 16v0zM16 16v0zM16 16v0z"></path>
          <path
            fill="none"
            stroke="#fff"
            strokeLinejoin="miter"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6667"
            d="M16 30.222v-14.222M16 16v-14.222M16 16h14.222M16 16h-14.222"
          ></path>
        </svg>
      );
    case 'icon-add-notice':
      return (
        <svg
          id="icon-add-notice"
          viewBox="0 0 32 32"
          width="40"
          height="40"
          className={scss.iconAddNotice}
        >
          <path fill="#fff" d="M16 30.222v0zM16 16v0zM16 16v0zM16 16v0z"></path>
          <path
            fill="none"
            stroke="#fff"
            strokeLinejoin="miter"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6667"
            d="M16 30.222v-14.222M16 16v-14.222M16 16h14.222M16 16h-14.222"
          ></path>
        </svg>
      );
    case 'icon-edit-avatar':
      return (
        <svg
          id="icon-edit-avatar"
          viewBox="0 0 30 32"
          width="20"
          height="20"
          className={scss.iconEditAvatar}
        >
          <path d="M15.158 12.982c-2.519 0-4.561 2.042-4.561 4.561s2.042 4.562 4.561 4.562 4.561-2.042 4.561-4.562c0-2.519-2.042-4.561-4.561-4.561z"></path>
          <path d="M11.299 0.35c-1.938 0-3.509 1.571-3.509 3.509v0.251c0 0.637-0.516 1.153-1.153 1.153-3.627 0-6.566 2.94-6.566 6.566v6.471c0 2.25-0 4.014 0.134 5.424 0.137 1.436 0.42 2.613 1.055 3.65 0.665 1.086 1.578 1.999 2.664 2.664 1.037 0.635 2.213 0.919 3.65 1.055 1.409 0.134 3.174 0.134 5.424 0.134h4.321c2.25 0 4.015 0 5.424-0.134 1.436-0.137 2.613-0.42 3.65-1.055 1.086-0.665 1.999-1.578 2.664-2.664 0.635-1.037 0.919-2.213 1.055-3.65 0.134-1.41 0.134-3.174 0.134-5.424v-6.471c0-3.627-2.94-6.566-6.567-6.566-0.637 0-1.153-0.516-1.153-1.153v-0.251c0-1.938-1.571-3.509-3.509-3.509h-7.719zM8.492 17.543c0-3.682 2.985-6.667 6.667-6.667s6.667 2.985 6.667 6.667c0 3.682-2.985 6.667-6.667 6.667s-6.667-2.985-6.667-6.667zM23.579 13.333c-0.775 0-1.403-0.628-1.403-1.403s0.628-1.404 1.403-1.404c0.775 0 1.404 0.628 1.404 1.404s-0.628 1.403-1.404 1.403z"></path>
        </svg>
      );

    case 'icon-menu-close':
      return (
        <svg
          id="icon-menu-close"
          viewBox="0 0 32 32"
          width="40"
          height="40"
          className={scss.closeMenu}
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3.2"
            d="M24 8l-16 16"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3.2"
            d="M8 8l16 16"
          ></path>
        </svg>
      );

    case 'icon-reset-search':
      return (
        <svg
          id="icon-reset-search"
          viewBox="0 0 32 32"
          width="25"
          height="25"
          className={scss.search_reset}
        >
          <path
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6667"
            d="M16 28c6.627 0 12-5.373 12-12s-5.373-12-12-12c-6.627 0-12 5.373-12 12s5.373 12 12 12z"
          ></path>
          <path
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6667"
            d="M20 12l-8 8"
          ></path>
          <path
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6667"
            d="M12 12l8 8"
          ></path>
        </svg>
      );
    // case 'icon-edit-avatar':
    //   return (
    //     <svg
    //       id="icon-edit-avatar"
    //       viewBox="0 0 30 32"
    //       width="20"
    //       height="20"
    //       className={scss.edit_avatar}
    //     >
    //       {/* <path d="M15.158 12.982c-2.519 0-4.561 2.042-4.561
    //         4.561s2.042 4.562 4.561 4.562 4.561-2.042
    //         4.561-4.562c0-2.519-2.042-4.561-4.561-4.561z"></path> */}
    //       <path d="M11.299 0.35c-1.938 0-3.509 1.571-3.509
    //         3.509v0.251c0 0.637-0.516 1.153-1.153 1.153-3.627 0-6.566 2.94-6.566
    //         6.566v6.471c0 2.25-0 4.014 0.134 5.424 0.137 1.436 0.42 2.613 1.055
    //         3.65 0.665 1.086 1.578 1.999 2.664 2.664 1.037 0.635 2.213 0.919 3.65
    //         1.055 1.409 0.134 3.174 0.134 5.424 0.134h4.321c2.25 0 4.015 0
    //         5.424-0.134 1.436-0.137 2.613-0.42 3.65-1.055 1.086-0.665 1.999-1.578
    //         2.664-2.664 0.635-1.037 0.919-2.213 1.055-3.65 0.134-1.41 0.134-3.174
    //         0.134-5.424v-6.471c0-3.627-2.94-6.566-6.567-6.566-0.637
    //         0-1.153-0.516-1.153-1.153v-0.251c0-1.938-1.571-3.509-3.509-3.509h-7.719zM8.492
    //         17.543c0-3.682 2.985-6.667 6.667-6.667s6.667 2.985 6.667 6.667c0
    //         3.682-2.985 6.667-6.667 6.667s-6.667-2.985-6.667-6.667zM23.579
    //         13.333c-0.775 0-1.403-0.628-1.403-1.403s0.628-1.404 1.403-1.404c0.775
    //         0 1.404 0.628 1.404 1.404s-0.628 1.403-1.404 1.403z"></path>
    //     </svg>
    //   );

    case 'icon-google':
      return (
        <svg
          id="icon-google"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          className={scss.google}
        >
          <path
            fill="#e94335"
            d="M2.65 9.119c0.969-2.019 2.337-3.725 4.063-5.144 2.338-1.931 5.019-3.094 8.025-3.45 3.531-0.419 6.85 0.25 9.919 2.087 0.762 0.456 1.475 0.975 2.156 1.538 0.169 0.138 0.15 0.219 0.006 0.356-1.394 1.388-2.788 2.775-4.169 4.175-0.163 0.162-0.25 0.15-0.425 0.019-4.050-3.119-9.956-2.275-12.975 1.85-0.531 0.725-0.963 1.506-1.263 2.356-0.025 0.075-0.075 0.144-0.112 0.219-0.806-0.613-1.619-1.225-2.419-1.844-0.938-0.719-1.875-1.438-2.806-2.162z"
          ></path>
          <path
            fill="#34a853"
            d="M7.875 18.988c0.269 0.594 0.494 1.212 0.831 1.769 1.419 2.325 3.444 3.819 6.113 4.35 2.406 0.481 4.719 0.156 6.875-1.050 0.075-0.038 0.15-0.075 0.219-0.113 0.038 0.038 0.069 0.081 0.106 0.113 1.613 1.25 3.231 2.5 4.844 3.75-0.775 0.769-1.656 1.387-2.594 1.925-2.719 1.55-5.662 2.175-8.762 1.938-3.863-0.3-7.194-1.825-9.944-4.575-1.206-1.206-2.2-2.569-2.919-4.125 0.669-0.512 1.337-1.019 2.006-1.531 1.075-0.819 2.15-1.631 3.225-2.45z"
          ></path>
          <path
            fill="#4285f3"
            d="M26.869 27.806c-1.613-1.25-3.231-2.5-4.844-3.75-0.038-0.031-0.075-0.075-0.106-0.113 0.556-0.431 1.125-0.85 1.581-1.4 0.762-0.913 1.269-1.944 1.531-3.1 0.031-0.144 0.006-0.194-0.137-0.188-0.075 0.006-0.144 0-0.219 0-2.55 0-5.106-0.006-7.656 0.006-0.281 0-0.344-0.075-0.337-0.344 0.012-1.813 0.012-3.625 0-5.438 0-0.231 0.063-0.294 0.294-0.294 4.675 0.006 9.35 0.006 14.031 0 0.2 0 0.281 0.050 0.331 0.262 0.381 1.719 0.356 3.444 0.125 5.181-0.188 1.387-0.525 2.731-1.044 4.031-0.769 1.919-1.9 3.594-3.387 5.031-0.056 0.044-0.113 0.075-0.163 0.113z"
          ></path>
          <path
            fill="#fabb06"
            d="M7.875 18.988c-1.075 0.819-2.15 1.631-3.225 2.45-0.669 0.506-1.337 1.019-2.006 1.531-0.519-0.962-0.856-1.981-1.131-3.031-0.525-2.031-0.606-4.094-0.319-6.162 0.225-1.625 0.694-3.188 1.45-4.65 0.938 0.719 1.869 1.444 2.806 2.162 0.806 0.619 1.612 1.231 2.419 1.844-0.138 0.669-0.331 1.325-0.394 2.013-0.112 1.25 0.006 2.469 0.362 3.669 0.025 0.050 0.031 0.113 0.037 0.175z"
          ></path>
        </svg>
      );

    case 'icon-delete-notice':
      return (
        <svg
          id="icon-delete-notice"
          viewBox="0 0 29 32"
          width="20"
          height="20"
          className={scss.iconDeleteNotice}
        >
          <path d="M12.364 5.091h4.364c0-0.579-0.23-1.134-0.639-1.543s-0.964-0.639-1.543-0.639c-0.579 0-1.134 0.23-1.543 0.639s-0.639 0.964-0.639 1.543zM10.182 5.091c0-1.157 0.46-2.267 1.278-3.086s1.928-1.278 3.086-1.278c1.157 0 2.267 0.46 3.086 1.278s1.278 1.928 1.278 3.086h8.727c0.289 0 0.567 0.115 0.771 0.32s0.32 0.482 0.32 0.771-0.115 0.567-0.32 0.771c-0.204 0.205-0.482 0.32-0.771 0.32h-1.231l-2.629 19.283c-0.178 1.307-0.824 2.505-1.818 3.372s-2.268 1.345-3.587 1.345h-7.654c-1.319 0-2.593-0.478-3.587-1.345s-1.639-2.065-1.818-3.372l-2.629-19.283h-1.231c-0.289 0-0.567-0.115-0.771-0.32s-0.32-0.482-0.32-0.771c0-0.289 0.115-0.567 0.32-0.771s0.482-0.32 0.771-0.32h8.727zM12.364 12.727c0-0.289-0.115-0.567-0.32-0.771s-0.482-0.32-0.771-0.32c-0.289 0-0.567 0.115-0.771 0.32s-0.32 0.482-0.32 0.771v10.909c0 0.289 0.115 0.567 0.32 0.771s0.482 0.32 0.771 0.32 0.567-0.115 0.771-0.32c0.205-0.204 0.32-0.482 0.32-0.771v-10.909zM17.818 11.636c-0.289 0-0.567 0.115-0.771 0.32s-0.32 0.482-0.32 0.771v10.909c0 0.289 0.115 0.567 0.32 0.771s0.482 0.32 0.771 0.32 0.567-0.115 0.771-0.32c0.205-0.204 0.32-0.482 0.32-0.771v-10.909c0-0.289-0.115-0.567-0.32-0.771s-0.482-0.32-0.771-0.32z"></path>
        </svg>
      );

    case 'facebook':
      return (
        <svg
          id="facebook"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          className={scss.iconFacebook}
        >
          <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
        </svg>
      );

    case 'eye':
      return (
        <svg
          id="eye"
          viewBox="0 0 32 32"
          width="20"
          height="20"
          className={scss.iconEye}
        >
          <path d="M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path>
        </svg>
      );

    case 'eye-blocked':
      return (
        <svg
          id="eye-blocked"
          viewBox="0 0 32 32"
          width="20"
          height="20"
          className={scss.iconEye}
        >
          <path d="M29.561 0.439c-0.586-0.586-1.535-0.586-2.121 0l-6.318 6.318c-1.623-0.492-3.342-0.757-5.122-0.757-6.979 0-13.028 4.064-16 10 1.285 2.566 3.145 4.782 5.407 6.472l-4.968 4.968c-0.586 0.586-0.586 1.535 0 2.121 0.293 0.293 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439l27-27c0.586-0.586 0.586-1.536 0-2.121zM13 10c1.32 0 2.44 0.853 2.841 2.037l-3.804 3.804c-1.184-0.401-2.037-1.521-2.037-2.841 0-1.657 1.343-3 3-3zM3.441 16c1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 1.715 0.54 3.304 1.459 4.607l-1.904 1.904c-1.639-1.151-3.038-2.621-4.114-4.323z"></path>
          <path d="M24 13.813c0-0.849-0.133-1.667-0.378-2.434l-10.056 10.056c0.768 0.245 1.586 0.378 2.435 0.378 4.418 0 8-3.582 8-8z"></path>
          <path d="M25.938 9.062l-2.168 2.168c0.040 0.025 0.079 0.049 0.118 0.074 1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303-1.208 0-2.403-0.149-3.561-0.439l-2.403 2.403c1.866 0.671 3.873 1.036 5.964 1.036 6.978 0 13.027-4.064 16-10-1.407-2.81-3.504-5.2-6.062-6.938z"></path>
        </svg>
      );
    
    case 'icon-chevron-circle-up':
      return (
        <svg id="icon-chevron-circle-up" viewBox="0 0 24 28" className={scss.iconArrowUp}>
          <path d="M18.203 17.797l1.594-1.594c0.391-0.391 0.391-1.016 0-1.406l-7.094-7.094c-0.391-0.391-1.016-0.391-1.406 0l-7.094 7.094c-0.391 0.391-0.391 1.016 0 1.406l1.594 1.594c0.391 0.391 1.016 0.391 1.406 0l4.797-4.797 4.797 4.797c0.391 0.391 1.016 0.391 1.406 0zM24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z"></path>
        </svg>
      )

    default:
      return <svg></svg>;
  }
};

export default SvgInsert;
