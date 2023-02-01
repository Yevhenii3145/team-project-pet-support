import scss from "./logout.module.scss";

export function Logout() {
    return (
        <div className={scss.logout_box}>
            <button className={scss.logout_button} type="button">Logout</button>
        </div>
    )
}