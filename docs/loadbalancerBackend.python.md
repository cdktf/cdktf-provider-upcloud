# `loadbalancerBackend` Submodule <a name="`loadbalancerBackend` Submodule" id="@cdktf/provider-upcloud.loadbalancerBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerBackend <a name="LoadbalancerBackend" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend"></a>

Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend upcloud_loadbalancer_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_backend

loadbalancerBackend.LoadbalancerBackend(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  loadbalancer: str,
  name: str,
  id: str = None,
  properties: LoadbalancerBackendProperties = None,
  resolver_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.loadbalancer">loadbalancer</a></code> | <code>str</code> | ID of the load balancer to which the backend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the backend must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#id LoadbalancerBackend#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.resolverName">resolver_name</a></code> | <code>str</code> | Domain Name Resolver used with dynamic type members. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.loadbalancer"></a>

- *Type:* str

ID of the load balancer to which the backend is connected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#loadbalancer LoadbalancerBackend#loadbalancer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.name"></a>

- *Type:* str

The name of the backend must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#name LoadbalancerBackend#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#id LoadbalancerBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>

properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#properties LoadbalancerBackend#properties}

---

##### `resolver_name`<sup>Optional</sup> <a name="resolver_name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.resolverName"></a>

- *Type:* str

Domain Name Resolver used with dynamic type members.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#resolver_name LoadbalancerBackend#resolver_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetResolverName">reset_resolver_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_properties` <a name="put_properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties"></a>

```python
def put_properties(
  health_check_expected_status: typing.Union[int, float] = None,
  health_check_fall: typing.Union[int, float] = None,
  health_check_interval: typing.Union[int, float] = None,
  health_check_rise: typing.Union[int, float] = None,
  health_check_type: str = None,
  health_check_url: str = None,
  outbound_proxy_protocol: str = None,
  sticky_session_cookie_name: str = None,
  timeout_server: typing.Union[int, float] = None,
  timeout_tunnel: typing.Union[int, float] = None
) -> None
```

###### `health_check_expected_status`<sup>Optional</sup> <a name="health_check_expected_status" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.healthCheckExpectedStatus"></a>

- *Type:* typing.Union[int, float]

Expected HTTP status code returned by the customer application to mark server as healthy. Ignored for tcp type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_expected_status LoadbalancerBackend#health_check_expected_status}

---

###### `health_check_fall`<sup>Optional</sup> <a name="health_check_fall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.healthCheckFall"></a>

- *Type:* typing.Union[int, float]

Sets how many failed health checks are allowed until the backend member is taken off from the rotation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_fall LoadbalancerBackend#health_check_fall}

---

###### `health_check_interval`<sup>Optional</sup> <a name="health_check_interval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.healthCheckInterval"></a>

- *Type:* typing.Union[int, float]

Interval between health checks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_interval LoadbalancerBackend#health_check_interval}

---

###### `health_check_rise`<sup>Optional</sup> <a name="health_check_rise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.healthCheckRise"></a>

- *Type:* typing.Union[int, float]

Sets how many passing checks there must be before returning the backend member to the rotation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_rise LoadbalancerBackend#health_check_rise}

---

###### `health_check_type`<sup>Optional</sup> <a name="health_check_type" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.healthCheckType"></a>

- *Type:* str

Health check type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_type LoadbalancerBackend#health_check_type}

---

###### `health_check_url`<sup>Optional</sup> <a name="health_check_url" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.healthCheckUrl"></a>

- *Type:* str

Target path for health check HTTP GET requests. Ignored for tcp type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_url LoadbalancerBackend#health_check_url}

---

###### `outbound_proxy_protocol`<sup>Optional</sup> <a name="outbound_proxy_protocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.outboundProxyProtocol"></a>

- *Type:* str

Enable outbound proxy protocol by setting the desired version. Empty string disables proxy protocol.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#outbound_proxy_protocol LoadbalancerBackend#outbound_proxy_protocol}

---

###### `sticky_session_cookie_name`<sup>Optional</sup> <a name="sticky_session_cookie_name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.stickySessionCookieName"></a>

- *Type:* str

Sets sticky session cookie name. Empty string disables sticky session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#sticky_session_cookie_name LoadbalancerBackend#sticky_session_cookie_name}

---

###### `timeout_server`<sup>Optional</sup> <a name="timeout_server" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.timeoutServer"></a>

- *Type:* typing.Union[int, float]

Backend server timeout in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#timeout_server LoadbalancerBackend#timeout_server}

---

###### `timeout_tunnel`<sup>Optional</sup> <a name="timeout_tunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.timeoutTunnel"></a>

- *Type:* typing.Union[int, float]

Maximum inactivity time on the client and server side for tunnels in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#timeout_tunnel LoadbalancerBackend#timeout_tunnel}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_resolver_name` <a name="reset_resolver_name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetResolverName"></a>

```python
def reset_resolver_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_backend

loadbalancerBackend.LoadbalancerBackend.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_backend

loadbalancerBackend.LoadbalancerBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_backend

loadbalancerBackend.LoadbalancerBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference">LoadbalancerBackendPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancerInput">loadbalancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverNameInput">resolver_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancer">loadbalancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverName">resolver_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.properties"></a>

```python
properties: LoadbalancerBackendPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference">LoadbalancerBackendPropertiesOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `loadbalancer_input`<sup>Optional</sup> <a name="loadbalancer_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancerInput"></a>

```python
loadbalancer_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.propertiesInput"></a>

```python
properties_input: LoadbalancerBackendProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>

---

##### `resolver_name_input`<sup>Optional</sup> <a name="resolver_name_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverNameInput"></a>

```python
resolver_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancer"></a>

```python
loadbalancer: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resolver_name`<sup>Required</sup> <a name="resolver_name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverName"></a>

```python
resolver_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerBackendConfig <a name="LoadbalancerBackendConfig" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_backend

loadbalancerBackend.LoadbalancerBackendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  loadbalancer: str,
  name: str,
  id: str = None,
  properties: LoadbalancerBackendProperties = None,
  resolver_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.loadbalancer">loadbalancer</a></code> | <code>str</code> | ID of the load balancer to which the backend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.name">name</a></code> | <code>str</code> | The name of the backend must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#id LoadbalancerBackend#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.resolverName">resolver_name</a></code> | <code>str</code> | Domain Name Resolver used with dynamic type members. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.loadbalancer"></a>

```python
loadbalancer: str
```

- *Type:* str

ID of the load balancer to which the backend is connected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#loadbalancer LoadbalancerBackend#loadbalancer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the backend must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#name LoadbalancerBackend#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#id LoadbalancerBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.properties"></a>

```python
properties: LoadbalancerBackendProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>

properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#properties LoadbalancerBackend#properties}

---

##### `resolver_name`<sup>Optional</sup> <a name="resolver_name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.resolverName"></a>

```python
resolver_name: str
```

- *Type:* str

Domain Name Resolver used with dynamic type members.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#resolver_name LoadbalancerBackend#resolver_name}

---

### LoadbalancerBackendProperties <a name="LoadbalancerBackendProperties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_backend

loadbalancerBackend.LoadbalancerBackendProperties(
  health_check_expected_status: typing.Union[int, float] = None,
  health_check_fall: typing.Union[int, float] = None,
  health_check_interval: typing.Union[int, float] = None,
  health_check_rise: typing.Union[int, float] = None,
  health_check_type: str = None,
  health_check_url: str = None,
  outbound_proxy_protocol: str = None,
  sticky_session_cookie_name: str = None,
  timeout_server: typing.Union[int, float] = None,
  timeout_tunnel: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckExpectedStatus">health_check_expected_status</a></code> | <code>typing.Union[int, float]</code> | Expected HTTP status code returned by the customer application to mark server as healthy. Ignored for tcp type. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckFall">health_check_fall</a></code> | <code>typing.Union[int, float]</code> | Sets how many failed health checks are allowed until the backend member is taken off from the rotation. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckInterval">health_check_interval</a></code> | <code>typing.Union[int, float]</code> | Interval between health checks. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckRise">health_check_rise</a></code> | <code>typing.Union[int, float]</code> | Sets how many passing checks there must be before returning the backend member to the rotation. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckType">health_check_type</a></code> | <code>str</code> | Health check type. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckUrl">health_check_url</a></code> | <code>str</code> | Target path for health check HTTP GET requests. Ignored for tcp type. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.outboundProxyProtocol">outbound_proxy_protocol</a></code> | <code>str</code> | Enable outbound proxy protocol by setting the desired version. Empty string disables proxy protocol. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.stickySessionCookieName">sticky_session_cookie_name</a></code> | <code>str</code> | Sets sticky session cookie name. Empty string disables sticky session. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutServer">timeout_server</a></code> | <code>typing.Union[int, float]</code> | Backend server timeout in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutTunnel">timeout_tunnel</a></code> | <code>typing.Union[int, float]</code> | Maximum inactivity time on the client and server side for tunnels in seconds. |

---

##### `health_check_expected_status`<sup>Optional</sup> <a name="health_check_expected_status" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckExpectedStatus"></a>

```python
health_check_expected_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Expected HTTP status code returned by the customer application to mark server as healthy. Ignored for tcp type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_expected_status LoadbalancerBackend#health_check_expected_status}

---

##### `health_check_fall`<sup>Optional</sup> <a name="health_check_fall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckFall"></a>

```python
health_check_fall: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets how many failed health checks are allowed until the backend member is taken off from the rotation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_fall LoadbalancerBackend#health_check_fall}

---

##### `health_check_interval`<sup>Optional</sup> <a name="health_check_interval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckInterval"></a>

```python
health_check_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Interval between health checks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_interval LoadbalancerBackend#health_check_interval}

---

##### `health_check_rise`<sup>Optional</sup> <a name="health_check_rise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckRise"></a>

```python
health_check_rise: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets how many passing checks there must be before returning the backend member to the rotation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_rise LoadbalancerBackend#health_check_rise}

---

##### `health_check_type`<sup>Optional</sup> <a name="health_check_type" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckType"></a>

```python
health_check_type: str
```

- *Type:* str

Health check type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_type LoadbalancerBackend#health_check_type}

---

##### `health_check_url`<sup>Optional</sup> <a name="health_check_url" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckUrl"></a>

```python
health_check_url: str
```

- *Type:* str

Target path for health check HTTP GET requests. Ignored for tcp type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_url LoadbalancerBackend#health_check_url}

---

##### `outbound_proxy_protocol`<sup>Optional</sup> <a name="outbound_proxy_protocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.outboundProxyProtocol"></a>

```python
outbound_proxy_protocol: str
```

- *Type:* str

Enable outbound proxy protocol by setting the desired version. Empty string disables proxy protocol.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#outbound_proxy_protocol LoadbalancerBackend#outbound_proxy_protocol}

---

##### `sticky_session_cookie_name`<sup>Optional</sup> <a name="sticky_session_cookie_name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.stickySessionCookieName"></a>

```python
sticky_session_cookie_name: str
```

- *Type:* str

Sets sticky session cookie name. Empty string disables sticky session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#sticky_session_cookie_name LoadbalancerBackend#sticky_session_cookie_name}

---

##### `timeout_server`<sup>Optional</sup> <a name="timeout_server" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutServer"></a>

```python
timeout_server: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Backend server timeout in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#timeout_server LoadbalancerBackend#timeout_server}

---

##### `timeout_tunnel`<sup>Optional</sup> <a name="timeout_tunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutTunnel"></a>

```python
timeout_tunnel: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum inactivity time on the client and server side for tunnels in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#timeout_tunnel LoadbalancerBackend#timeout_tunnel}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerBackendPropertiesOutputReference <a name="LoadbalancerBackendPropertiesOutputReference" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_backend

loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckExpectedStatus">reset_health_check_expected_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckFall">reset_health_check_fall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckInterval">reset_health_check_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckRise">reset_health_check_rise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckType">reset_health_check_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckUrl">reset_health_check_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetOutboundProxyProtocol">reset_outbound_proxy_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetStickySessionCookieName">reset_sticky_session_cookie_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutServer">reset_timeout_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutTunnel">reset_timeout_tunnel</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_health_check_expected_status` <a name="reset_health_check_expected_status" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckExpectedStatus"></a>

```python
def reset_health_check_expected_status() -> None
```

##### `reset_health_check_fall` <a name="reset_health_check_fall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckFall"></a>

```python
def reset_health_check_fall() -> None
```

##### `reset_health_check_interval` <a name="reset_health_check_interval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckInterval"></a>

```python
def reset_health_check_interval() -> None
```

##### `reset_health_check_rise` <a name="reset_health_check_rise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckRise"></a>

```python
def reset_health_check_rise() -> None
```

##### `reset_health_check_type` <a name="reset_health_check_type" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckType"></a>

```python
def reset_health_check_type() -> None
```

##### `reset_health_check_url` <a name="reset_health_check_url" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckUrl"></a>

```python
def reset_health_check_url() -> None
```

##### `reset_outbound_proxy_protocol` <a name="reset_outbound_proxy_protocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetOutboundProxyProtocol"></a>

```python
def reset_outbound_proxy_protocol() -> None
```

##### `reset_sticky_session_cookie_name` <a name="reset_sticky_session_cookie_name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetStickySessionCookieName"></a>

```python
def reset_sticky_session_cookie_name() -> None
```

##### `reset_timeout_server` <a name="reset_timeout_server" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutServer"></a>

```python
def reset_timeout_server() -> None
```

##### `reset_timeout_tunnel` <a name="reset_timeout_tunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutTunnel"></a>

```python
def reset_timeout_tunnel() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatusInput">health_check_expected_status_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFallInput">health_check_fall_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckIntervalInput">health_check_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRiseInput">health_check_rise_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTypeInput">health_check_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrlInput">health_check_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocolInput">outbound_proxy_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieNameInput">sticky_session_cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServerInput">timeout_server_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnelInput">timeout_tunnel_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatus">health_check_expected_status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFall">health_check_fall</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckInterval">health_check_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRise">health_check_rise</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckType">health_check_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrl">health_check_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocol">outbound_proxy_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieName">sticky_session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServer">timeout_server</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnel">timeout_tunnel</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_check_expected_status_input`<sup>Optional</sup> <a name="health_check_expected_status_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatusInput"></a>

```python
health_check_expected_status_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_fall_input`<sup>Optional</sup> <a name="health_check_fall_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFallInput"></a>

```python
health_check_fall_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_interval_input`<sup>Optional</sup> <a name="health_check_interval_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckIntervalInput"></a>

```python
health_check_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_rise_input`<sup>Optional</sup> <a name="health_check_rise_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRiseInput"></a>

```python
health_check_rise_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_type_input`<sup>Optional</sup> <a name="health_check_type_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTypeInput"></a>

```python
health_check_type_input: str
```

- *Type:* str

---

##### `health_check_url_input`<sup>Optional</sup> <a name="health_check_url_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrlInput"></a>

```python
health_check_url_input: str
```

- *Type:* str

---

##### `outbound_proxy_protocol_input`<sup>Optional</sup> <a name="outbound_proxy_protocol_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocolInput"></a>

```python
outbound_proxy_protocol_input: str
```

- *Type:* str

---

##### `sticky_session_cookie_name_input`<sup>Optional</sup> <a name="sticky_session_cookie_name_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieNameInput"></a>

```python
sticky_session_cookie_name_input: str
```

- *Type:* str

---

##### `timeout_server_input`<sup>Optional</sup> <a name="timeout_server_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServerInput"></a>

```python
timeout_server_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_tunnel_input`<sup>Optional</sup> <a name="timeout_tunnel_input" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnelInput"></a>

```python
timeout_tunnel_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_expected_status`<sup>Required</sup> <a name="health_check_expected_status" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatus"></a>

```python
health_check_expected_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_fall`<sup>Required</sup> <a name="health_check_fall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFall"></a>

```python
health_check_fall: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_interval`<sup>Required</sup> <a name="health_check_interval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckInterval"></a>

```python
health_check_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_rise`<sup>Required</sup> <a name="health_check_rise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRise"></a>

```python
health_check_rise: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_type`<sup>Required</sup> <a name="health_check_type" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckType"></a>

```python
health_check_type: str
```

- *Type:* str

---

##### `health_check_url`<sup>Required</sup> <a name="health_check_url" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrl"></a>

```python
health_check_url: str
```

- *Type:* str

---

##### `outbound_proxy_protocol`<sup>Required</sup> <a name="outbound_proxy_protocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocol"></a>

```python
outbound_proxy_protocol: str
```

- *Type:* str

---

##### `sticky_session_cookie_name`<sup>Required</sup> <a name="sticky_session_cookie_name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieName"></a>

```python
sticky_session_cookie_name: str
```

- *Type:* str

---

##### `timeout_server`<sup>Required</sup> <a name="timeout_server" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServer"></a>

```python
timeout_server: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_tunnel`<sup>Required</sup> <a name="timeout_tunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnel"></a>

```python
timeout_tunnel: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: LoadbalancerBackendProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>

---


