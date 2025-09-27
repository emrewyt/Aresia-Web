#!/usr/bin/env python3
"""
Backend Test Suite for Aresia Website
Tests the /api/Sürüm endpoint and general backend health
"""

import requests
import json
import sys
from typing import Dict, Any

# Backend URL - using localhost:8001 as specified in the review request
BASE_URL = "http://localhost:8001"

class BackendTester:
    def __init__(self):
        self.results = []
        self.failed_tests = 0
        self.total_tests = 0

    def log_result(self, test_name: str, success: bool, message: str, details: Dict[Any, Any] = None):
        """Log test result"""
        self.total_tests += 1
        if not success:
            self.failed_tests += 1
        
        result = {
            "test": test_name,
            "success": success,
            "message": message,
            "details": details or {}
        }
        self.results.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {message}")
        if details:
            print(f"   Details: {details}")

    def test_version_endpoint(self):
        """Test /api/Sürüm endpoint as specified in review request"""
        test_name = "/api/Sürüm endpoint test"
        
        try:
            response = requests.get(f"{BASE_URL}/api/Sürüm", timeout=10)
            
            # Check status code
            if response.status_code != 200:
                self.log_result(test_name, False, f"Expected status 200, got {response.status_code}")
                return
            
            # Check response content
            response_text = response.text.strip('"')  # Remove quotes if present
            if response_text != "1.0.0":
                self.log_result(test_name, False, f"Expected '1.0.0', got '{response_text}'")
                return
            
            # Check content type (should be plain text or JSON)
            content_type = response.headers.get('content-type', '')
            
            details = {
                "status_code": response.status_code,
                "response": response_text,
                "content_type": content_type,
                "response_time": f"{response.elapsed.total_seconds():.3f}s"
            }
            
            self.log_result(test_name, True, "Version endpoint working correctly", details)
            
        except requests.exceptions.RequestException as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result(test_name, False, f"Unexpected error: {str(e)}")

    def test_root_api_endpoint(self):
        """Test /api/ root endpoint for general health check"""
        test_name = "/api/ root endpoint test"
        
        try:
            response = requests.get(f"{BASE_URL}/api/", timeout=10)
            
            if response.status_code != 200:
                self.log_result(test_name, False, f"Expected status 200, got {response.status_code}")
                return
            
            # Try to parse JSON response
            try:
                json_data = response.json()
                expected_message = "Hello World"
                
                if json_data.get("message") != expected_message:
                    self.log_result(test_name, False, f"Expected message '{expected_message}', got '{json_data.get('message')}'")
                    return
                
                details = {
                    "status_code": response.status_code,
                    "response": json_data,
                    "content_type": response.headers.get('content-type', ''),
                    "response_time": f"{response.elapsed.total_seconds():.3f}s"
                }
                
                self.log_result(test_name, True, "Root API endpoint working correctly", details)
                
            except json.JSONDecodeError:
                self.log_result(test_name, False, f"Response is not valid JSON: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result(test_name, False, f"Unexpected error: {str(e)}")

    def test_cors_configuration(self):
        """Test CORS configuration"""
        test_name = "CORS configuration test"
        
        try:
            # Make a GET request with Origin header to test CORS
            headers = {"Origin": "http://example.com"}
            response = requests.get(f"{BASE_URL}/api/", headers=headers, timeout=10)
            
            cors_headers = {
                "access-control-allow-origin": response.headers.get('access-control-allow-origin'),
                "access-control-allow-credentials": response.headers.get('access-control-allow-credentials'),
                "access-control-allow-methods": response.headers.get('access-control-allow-methods'),
                "access-control-allow-headers": response.headers.get('access-control-allow-headers'),
            }
            
            # Check if CORS is properly configured
            allow_origin = cors_headers["access-control-allow-origin"]
            
            details = {
                "status_code": response.status_code,
                "cors_headers": cors_headers,
                "response_time": f"{response.elapsed.total_seconds():.3f}s"
            }
            
            if allow_origin:
                self.log_result(test_name, True, f"CORS properly configured (allow-origin: {allow_origin})", details)
            else:
                self.log_result(test_name, False, "No CORS allow-origin header found", details)
                
        except requests.exceptions.RequestException as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result(test_name, False, f"Unexpected error: {str(e)}")

    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Aresia Backend Tests")
        print("=" * 50)
        
        # Test the specific endpoints mentioned in the review request
        self.test_version_endpoint()
        self.test_root_api_endpoint()
        self.test_cors_configuration()
        
        print("\n" + "=" * 50)
        print(f"📊 Test Summary: {self.total_tests - self.failed_tests}/{self.total_tests} tests passed")
        
        if self.failed_tests > 0:
            print(f"❌ {self.failed_tests} test(s) failed")
            return False
        else:
            print("✅ All tests passed!")
            return True

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)