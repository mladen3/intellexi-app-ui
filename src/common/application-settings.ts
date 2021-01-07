export class ApplicationSettings {

  /**
   * <p>Observable subscribe timeout, every subscribe(ajax call or redux store select) should timeout after this
   * period.</p>
   * @returns {number}
   */
  public static HTTP_AJAX_TIMEOUT = 120_000;
  public static CSRF_HTTP_COOKIE_NAME = "XSRF-TOKEN";
  public static ACCEPT_LANGUAGE_HEADER: string = "Accept-Language";
  public static CSRF_CUSTOM_HTTP_HEADER_NAME: string = "x-csrf-token";
}
