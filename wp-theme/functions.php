<?php
/**
 * Europa Stars Unified Theme Functions
 *
 * Custom WordPress 6.7+ theme for europa-stars.eu (Agency + Bratislava Sports Academy).
 * Built without Elementor or page-builder bloat.
 *
 * @package EuropaStarsUnified
 * @version 1.0.0
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'EUROPA_STARS_VERSION', '1.0.0' );
define( 'EUROPA_STARS_TEXT_DOMAIN', 'europa-stars-unified' );

/**
 * 1. Theme Setup, Nav Menus, Assets & Polylang/WPML String Registration
 */
add_action( 'after_setup_theme', 'europa_stars_theme_setup' );
function europa_stars_theme_setup(): void {
	load_theme_textdomain( EUROPA_STARS_TEXT_DOMAIN, get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support(
		'html5',
		[
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		]
	);

	register_nav_menus(
		[
			'primary_agency_academy' => __( 'Primary Agency & Academy Menu', EUROPA_STARS_TEXT_DOMAIN ),
			'footer_legal'           => __( 'Footer Legal & Compliance Menu', EUROPA_STARS_TEXT_DOMAIN ),
		]
	);

	europa_stars_register_multilingual_strings();
}

/**
 * Register core UI strings for Polylang / WPML (RU / EN / SK).
 */
function europa_stars_register_multilingual_strings(): void {
	$strings = [
		'nav_agency'         => 'Agency',
		'nav_academy'        => 'Bratislava Academy',
		'nav_leagues'        => 'Leagues & Placement',
		'nav_staff'          => 'Agents & Coaches',
		'cta_apply_now'      => 'Apply for Assessment',
		'form_success_msg'   => 'Your application has been received. Our accredited staff will contact you shortly.',
		'form_error_msg'     => 'Unable to submit application. Please verify your details and try again.',
		'footer_copyright'   => 'Europa Stars Hockey Agency & Bratislava Sports Academy',
	];

	if ( function_exists( 'pll_register_string' ) ) {
		foreach ( $strings as $name => $value ) {
			pll_register_string( $name, $value, 'Europa Stars Unified' );
		}
	} elseif ( has_action( 'wpml_register_single_string' ) ) {
		foreach ( $strings as $name => $value ) {
			do_action( 'wpml_register_single_string', 'Europa Stars Unified', $name, $value );
		}
	}
}

/**
 * Helper to retrieve translated string across Polylang, WPML, or default gettext.
 */
function europa_stars_t( string $key, string $default ): string {
	if ( function_exists( 'pll__' ) ) {
		return (string) pll__( $default );
	}
	if ( has_filter( 'wpml_translate_single_string' ) ) {
		return (string) apply_filters( 'wpml_translate_single_string', $default, 'Europa Stars Unified', $key );
	}
	return __( $default, EUROPA_STARS_TEXT_DOMAIN );
}

/**
 * 2. Custom Post Types & Taxonomies
 *    - es_league (with es_region taxonomy)
 *    - es_program
 *    - es_staff
 */
add_action( 'init', 'europa_stars_register_post_types_and_taxonomies' );
function europa_stars_register_post_types_and_taxonomies(): void {
	// Taxonomy: Placement Regions (USA/NCAA, Slovakia, Czechia, Sweden/Finland/Switzerland)
	register_taxonomy(
		'es_region',
		[ 'es_league' ],
		[
			'labels'            => [
				'name'          => __( 'Placement Regions', EUROPA_STARS_TEXT_DOMAIN ),
				'singular_name' => __( 'Placement Region', EUROPA_STARS_TEXT_DOMAIN ),
				'search_items'  => __( 'Search Regions', EUROPA_STARS_TEXT_DOMAIN ),
				'all_items'     => __( 'All Regions', EUROPA_STARS_TEXT_DOMAIN ),
				'edit_item'     => __( 'Edit Region', EUROPA_STARS_TEXT_DOMAIN ),
				'update_item'   => __( 'Update Region', EUROPA_STARS_TEXT_DOMAIN ),
				'add_new_item'  => __( 'Add New Region', EUROPA_STARS_TEXT_DOMAIN ),
				'menu_name'     => __( 'Regions', EUROPA_STARS_TEXT_DOMAIN ),
			],
			'hierarchical'      => true,
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_rest'      => true,
			'rewrite'           => [ 'slug' => 'region', 'with_front' => false ],
		]
	);

	// CPT: Hockey Leagues & Placement Regions
	register_post_type(
		'es_league',
		[
			'labels'       => [
				'name'          => __( 'Hockey Leagues', EUROPA_STARS_TEXT_DOMAIN ),
				'singular_name' => __( 'Hockey League', EUROPA_STARS_TEXT_DOMAIN ),
				'add_new_item'  => __( 'Add New League', EUROPA_STARS_TEXT_DOMAIN ),
				'edit_item'     => __( 'Edit League', EUROPA_STARS_TEXT_DOMAIN ),
				'all_items'     => __( 'All Leagues', EUROPA_STARS_TEXT_DOMAIN ),
			],
			'public'       => true,
			'has_archive'  => true,
			'menu_icon'    => 'dashicons-awards',
			'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ],
			'show_in_rest' => true,
			'rewrite'      => [ 'slug' => 'leagues', 'with_front' => false ],
		]
	);

	// CPT: Bratislava Sports Academy & Boost Hockey Tracks
	register_post_type(
		'es_program',
		[
			'labels'       => [
				'name'          => __( 'Academy Programs', EUROPA_STARS_TEXT_DOMAIN ),
				'singular_name' => __( 'Academy Program', EUROPA_STARS_TEXT_DOMAIN ),
				'add_new_item'  => __( 'Add New Program', EUROPA_STARS_TEXT_DOMAIN ),
				'edit_item'     => __( 'Edit Program', EUROPA_STARS_TEXT_DOMAIN ),
				'all_items'     => __( 'All Programs', EUROPA_STARS_TEXT_DOMAIN ),
			],
			'public'       => true,
			'has_archive'  => true,
			'menu_icon'    => 'dashicons-welcome-learn-more',
			'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ],
			'show_in_rest' => true,
			'rewrite'      => [ 'slug' => 'academy/programs', 'with_front' => false ],
		]
	);

	// CPT: Accredited Agents & Coaching Staff
	register_post_type(
		'es_staff',
		[
			'labels'       => [
				'name'          => __( 'Agents & Coaches', EUROPA_STARS_TEXT_DOMAIN ),
				'singular_name' => __( 'Staff Member', EUROPA_STARS_TEXT_DOMAIN ),
				'add_new_item'  => __( 'Add Staff Member', EUROPA_STARS_TEXT_DOMAIN ),
				'edit_item'     => __( 'Edit Staff Member', EUROPA_STARS_TEXT_DOMAIN ),
				'all_items'     => __( 'All Staff', EUROPA_STARS_TEXT_DOMAIN ),
			],
			'public'       => true,
			'has_archive'  => true,
			'menu_icon'    => 'dashicons-groups',
			'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ],
			'show_in_rest' => true,
			'rewrite'      => [ 'slug' => 'staff', 'with_front' => false ],
		]
	);
}

/**
 * 3. Post-Hack Security Hardening
 *    Addresses legacy Joomla SP Page Builder compromise vectors.
 */
add_filter( 'xmlrpc_enabled', '__return_false' );

add_filter(
	'wp_headers',
	static function ( array $headers ): array {
		unset( $headers['X-Pingback'] );
		$headers['X-Content-Type-Options'] = 'nosniff';
		$headers['X-Frame-Options']        = 'SAMEORIGIN';
		$headers['Referrer-Policy']        = 'strict-origin-when-cross-origin';
		return $headers;
	}
);

// Remove WordPress version exposure from <head>, feeds, and asset query strings.
remove_action( 'wp_head', 'wp_generator' );
add_filter( 'the_generator', '__return_empty_string' );

// Restrict unauthenticated REST API user enumeration (/wp/v2/users).
add_filter(
	'rest_endpoints',
	static function ( array $endpoints ): array {
		if ( ! is_user_logged_in() ) {
			unset( $endpoints['/wp/v2/users'] );
			unset( $endpoints['/wp/v2/users/(?P<id>[\d]+)'] );
		}
		return $endpoints;
	}
);

/**
 * 4. Legacy Domain Consolidation Redirect Map & Application REST Endpoint
 *    301 permanent redirect from academy.europa-stars.eu -> europa-stars.eu/academy/
 */
add_action( 'template_redirect', 'europa_stars_legacy_domain_redirect', 1 );
function europa_stars_legacy_domain_redirect(): void {
	if ( empty( $_SERVER['HTTP_HOST'] ) ) {
		return;
	}

	$host = strtolower( sanitize_text_field( wp_unslash( $_SERVER['HTTP_HOST'] ) ) );
	if ( 'academy.europa-stars.eu' !== $host ) {
		return;
	}

	$request_uri = isset( $_SERVER['REQUEST_URI'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REQUEST_URI'] ) ) : '/';
	$path        = trim( (string) wp_parse_url( $request_uri, PHP_URL_PATH ), '/' );

	$redirect_map = [
		''                => '/academy/',
		'index.php'       => '/academy/',
		'programs'        => '/academy/programs/',
		'boost-hockey'    => '/academy/programs/boost-hockey/',
		'bratislava'      => '/academy/',
		'coaches'         => '/staff/',
		'contact'         => '/academy/#apply',
		'apply'           => '/academy/#apply',
	];

	$target_path = $redirect_map[ $path ] ?? '/academy/' . ( '' !== $path ? $path . '/' : '' );
	$target_url  = 'https://europa-stars.eu' . $target_path;

	wp_redirect( $target_url, 301 );
	exit;
}

/**
 * Register REST endpoint: POST /wp-json/europa-stars/v1/application
 */
add_action( 'rest_api_init', 'europa_stars_register_application_route' );
function europa_stars_register_application_route(): void {
	register_rest_route(
		'europa-stars/v1',
		'/application',
		[
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => 'europa_stars_handle_application_submission',
			'permission_callback' => 'europa_stars_verify_application_request',
		]
	);
}

/**
 * Verify WP REST nonce (when provided) and enforce IP-based rate limiting.
 */
function europa_stars_verify_application_request( WP_REST_Request $request ): bool|WP_Error {
	$nonce = $request->get_header( 'X-WP-Nonce' );
	if ( ! empty( $nonce ) && ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
		return new WP_Error(
			'rest_forbidden_nonce',
			__( 'Invalid security token.', EUROPA_STARS_TEXT_DOMAIN ),
			[ 'status' => 403 ]
		);
	}

	$ip        = isset( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) ) : 'unknown';
	$rate_key  = 'es_app_rate_' . md5( $ip );
	$attempts  = (int) get_transient( $rate_key );

	if ( $attempts >= 5 ) {
		return new WP_Error(
			'rest_rate_limited',
			__( 'Too many application attempts. Please try again in 15 minutes.', EUROPA_STARS_TEXT_DOMAIN ),
			[ 'status' => 429 ]
		);
	}

	set_transient( $rate_key, $attempts + 1, 15 * MINUTE_IN_SECONDS );
	return true;
}

/**
 * Sanitize application payload and send notification email to info@europa-stars.com.
 */
function europa_stars_handle_application_submission( WP_REST_Request $request ): WP_REST_Response|WP_Error {
	$full_name   = sanitize_text_field( (string) $request->get_param( 'full_name' ) );
	$email       = sanitize_email( (string) $request->get_param( 'email' ) );
	$phone       = sanitize_text_field( (string) $request->get_param( 'phone' ) );
	$birth_year  = sanitize_text_field( (string) $request->get_param( 'birth_year' ) );
	$position    = sanitize_text_field( (string) $request->get_param( 'position' ) );
	$track       = sanitize_text_field( (string) $request->get_param( 'track' ) );
	$language    = sanitize_text_field( (string) $request->get_param( 'language' ) );
	$notes       = sanitize_textarea_field( (string) $request->get_param( 'notes' ) );

	if ( '' === $full_name || ! is_email( $email ) ) {
		return new WP_Error(
			'rest_invalid_params',
			__( 'Full name and a valid email address are required.', EUROPA_STARS_TEXT_DOMAIN ),
			[ 'status' => 400 ]
		);
	}

	$to      = 'info@europa-stars.com';
	$subject = sprintf( '[Europa Stars Application] %s (%s)', $full_name, '' !== $track ? $track : 'General' );
	$body    = implode(
		"\n",
		[
			'New Player / Academy Application',
			'--------------------------------',
			'Full Name:   ' . $full_name,
			'Email:       ' . $email,
			'Phone:       ' . $phone,
			'Birth Year:  ' . $birth_year,
			'Position:    ' . $position,
			'Track:       ' . $track,
			'Language:    ' . $language,
			'Notes:       ' . $notes,
			'Submitted:   ' . gmdate( 'Y-m-d H:i:s' ) . ' UTC',
		]
	);

	$headers = [
		'Content-Type: text/plain; charset=UTF-8',
		'Reply-To: ' . $full_name . ' <' . $email . '>',
	];

	$sent = wp_mail( $to, $subject, $body, $headers );

	if ( ! $sent ) {
		return new WP_Error(
			'rest_mail_failed',
			__( 'Failed to dispatch application email.', EUROPA_STARS_TEXT_DOMAIN ),
			[ 'status' => 500 ]
		);
	}

	return new WP_REST_Response(
		[
			'success' => true,
			'message' => europa_stars_t( 'form_success_msg', 'Your application has been received. Our accredited staff will contact you shortly.' ),
		],
		201
	);
}
