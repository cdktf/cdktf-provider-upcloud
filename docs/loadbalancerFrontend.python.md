# `loadbalancerFrontend` Submodule <a name="`loadbalancerFrontend` Submodule" id="@cdktf/provider-upcloud.loadbalancerFrontend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerFrontend <a name="LoadbalancerFrontend" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend upcloud_loadbalancer_frontend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_frontend

loadbalancerFrontend.LoadbalancerFrontend(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_backend_name: str,
  loadbalancer: str,
  mode: str,
  name: str,
  port: typing.Union[int, float],
  id: str = None,
  networks: typing.Union[IResolvable, typing.List[LoadbalancerFrontendNetworks]] = None,
  properties: LoadbalancerFrontendProperties = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.defaultBackendName">default_backend_name</a></code> | <code>str</code> | The name of the default backend where traffic will be routed. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.loadbalancer">loadbalancer</a></code> | <code>str</code> | ID of the load balancer to which the frontend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.mode">mode</a></code> | <code>str</code> | When load balancer operating in `tcp` mode it acts as a layer 4 proxy. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the frontend must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Port to listen incoming requests. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | properties block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_backend_name`<sup>Required</sup> <a name="default_backend_name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.defaultBackendName"></a>

- *Type:* str

The name of the default backend where traffic will be routed.

Note, default backend can be overwritten in frontend rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#default_backend_name LoadbalancerFrontend#default_backend_name}

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.loadbalancer"></a>

- *Type:* str

ID of the load balancer to which the frontend is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#loadbalancer LoadbalancerFrontend#loadbalancer}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.mode"></a>

- *Type:* str

When load balancer operating in `tcp` mode it acts as a layer 4 proxy.

In `http` mode it acts as a layer 7 proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#mode LoadbalancerFrontend#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.name"></a>

- *Type:* str

The name of the frontend must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port to listen incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#port LoadbalancerFrontend#port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.networks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#networks LoadbalancerFrontend#networks}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#properties LoadbalancerFrontend#properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks">put_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetNetworks">reset_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_networks` <a name="put_networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks"></a>

```python
def put_networks(
  value: typing.Union[IResolvable, typing.List[LoadbalancerFrontendNetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>]]

---

##### `put_properties` <a name="put_properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties"></a>

```python
def put_properties(
  http2_enabled: typing.Union[bool, IResolvable] = None,
  inbound_proxy_protocol: typing.Union[bool, IResolvable] = None,
  timeout_client: typing.Union[int, float] = None
) -> None
```

###### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties.parameter.http2Enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable HTTP/2 support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#http2_enabled LoadbalancerFrontend#http2_enabled}

---

###### `inbound_proxy_protocol`<sup>Optional</sup> <a name="inbound_proxy_protocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties.parameter.inboundProxyProtocol"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable inbound proxy protocol support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#inbound_proxy_protocol LoadbalancerFrontend#inbound_proxy_protocol}

---

###### `timeout_client`<sup>Optional</sup> <a name="timeout_client" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties.parameter.timeoutClient"></a>

- *Type:* typing.Union[int, float]

Client request timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#timeout_client LoadbalancerFrontend#timeout_client}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_networks` <a name="reset_networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetNetworks"></a>

```python
def reset_networks() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetProperties"></a>

```python
def reset_properties() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoadbalancerFrontend resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_frontend

loadbalancerFrontend.LoadbalancerFrontend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_frontend

loadbalancerFrontend.LoadbalancerFrontend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_frontend

loadbalancerFrontend.LoadbalancerFrontend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_frontend

loadbalancerFrontend.LoadbalancerFrontend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoadbalancerFrontend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoadbalancerFrontend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoadbalancerFrontend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerFrontend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList">LoadbalancerFrontendNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference">LoadbalancerFrontendPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.rules">rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tlsConfigs">tls_configs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendNameInput">default_backend_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancerInput">loadbalancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networksInput">networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendName">default_backend_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancer">loadbalancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networks"></a>

```python
networks: LoadbalancerFrontendNetworksList
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList">LoadbalancerFrontendNetworksList</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.properties"></a>

```python
properties: LoadbalancerFrontendPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference">LoadbalancerFrontendPropertiesOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.rules"></a>

```python
rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_configs`<sup>Required</sup> <a name="tls_configs" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tlsConfigs"></a>

```python
tls_configs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_backend_name_input`<sup>Optional</sup> <a name="default_backend_name_input" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendNameInput"></a>

```python
default_backend_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `loadbalancer_input`<sup>Optional</sup> <a name="loadbalancer_input" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancerInput"></a>

```python
loadbalancer_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networks_input`<sup>Optional</sup> <a name="networks_input" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networksInput"></a>

```python
networks_input: typing.Union[IResolvable, typing.List[LoadbalancerFrontendNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>]]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.propertiesInput"></a>

```python
properties_input: LoadbalancerFrontendProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---

##### `default_backend_name`<sup>Required</sup> <a name="default_backend_name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendName"></a>

```python
default_backend_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancer"></a>

```python
loadbalancer: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerFrontendConfig <a name="LoadbalancerFrontendConfig" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_frontend

loadbalancerFrontend.LoadbalancerFrontendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_backend_name: str,
  loadbalancer: str,
  mode: str,
  name: str,
  port: typing.Union[int, float],
  id: str = None,
  networks: typing.Union[IResolvable, typing.List[LoadbalancerFrontendNetworks]] = None,
  properties: LoadbalancerFrontendProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.defaultBackendName">default_backend_name</a></code> | <code>str</code> | The name of the default backend where traffic will be routed. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.loadbalancer">loadbalancer</a></code> | <code>str</code> | ID of the load balancer to which the frontend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.mode">mode</a></code> | <code>str</code> | When load balancer operating in `tcp` mode it acts as a layer 4 proxy. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.name">name</a></code> | <code>str</code> | The name of the frontend must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port to listen incoming requests. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_backend_name`<sup>Required</sup> <a name="default_backend_name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.defaultBackendName"></a>

```python
default_backend_name: str
```

- *Type:* str

The name of the default backend where traffic will be routed.

Note, default backend can be overwritten in frontend rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#default_backend_name LoadbalancerFrontend#default_backend_name}

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.loadbalancer"></a>

```python
loadbalancer: str
```

- *Type:* str

ID of the load balancer to which the frontend is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#loadbalancer LoadbalancerFrontend#loadbalancer}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

When load balancer operating in `tcp` mode it acts as a layer 4 proxy.

In `http` mode it acts as a layer 7 proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#mode LoadbalancerFrontend#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the frontend must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port to listen incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#port LoadbalancerFrontend#port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.networks"></a>

```python
networks: typing.Union[IResolvable, typing.List[LoadbalancerFrontendNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#networks LoadbalancerFrontend#networks}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.properties"></a>

```python
properties: LoadbalancerFrontendProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#properties LoadbalancerFrontend#properties}

---

### LoadbalancerFrontendNetworks <a name="LoadbalancerFrontendNetworks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_frontend

loadbalancerFrontend.LoadbalancerFrontendNetworks(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.property.name">name</a></code> | <code>str</code> | Name of the load balancer network. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the load balancer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}

---

### LoadbalancerFrontendProperties <a name="LoadbalancerFrontendProperties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_frontend

loadbalancerFrontend.LoadbalancerFrontendProperties(
  http2_enabled: typing.Union[bool, IResolvable] = None,
  inbound_proxy_protocol: typing.Union[bool, IResolvable] = None,
  timeout_client: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable HTTP/2 support. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.inboundProxyProtocol">inbound_proxy_protocol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable inbound proxy protocol support. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.timeoutClient">timeout_client</a></code> | <code>typing.Union[int, float]</code> | Client request timeout in seconds. |

---

##### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable HTTP/2 support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#http2_enabled LoadbalancerFrontend#http2_enabled}

---

##### `inbound_proxy_protocol`<sup>Optional</sup> <a name="inbound_proxy_protocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.inboundProxyProtocol"></a>

```python
inbound_proxy_protocol: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable inbound proxy protocol support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#inbound_proxy_protocol LoadbalancerFrontend#inbound_proxy_protocol}

---

##### `timeout_client`<sup>Optional</sup> <a name="timeout_client" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.timeoutClient"></a>

```python
timeout_client: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Client request timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/loadbalancer_frontend#timeout_client LoadbalancerFrontend#timeout_client}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerFrontendNetworksList <a name="LoadbalancerFrontendNetworksList" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_frontend

loadbalancerFrontend.LoadbalancerFrontendNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadbalancerFrontendNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadbalancerFrontendNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>]]

---


### LoadbalancerFrontendNetworksOutputReference <a name="LoadbalancerFrontendNetworksOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_frontend

loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadbalancerFrontendNetworks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>]

---


### LoadbalancerFrontendPropertiesOutputReference <a name="LoadbalancerFrontendPropertiesOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_frontend

loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetHttp2Enabled">reset_http2_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetInboundProxyProtocol">reset_inbound_proxy_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetTimeoutClient">reset_timeout_client</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http2_enabled` <a name="reset_http2_enabled" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetHttp2Enabled"></a>

```python
def reset_http2_enabled() -> None
```

##### `reset_inbound_proxy_protocol` <a name="reset_inbound_proxy_protocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetInboundProxyProtocol"></a>

```python
def reset_inbound_proxy_protocol() -> None
```

##### `reset_timeout_client` <a name="reset_timeout_client" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetTimeoutClient"></a>

```python
def reset_timeout_client() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.http2EnabledInput">http2_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocolInput">inbound_proxy_protocol_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClientInput">timeout_client_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocol">inbound_proxy_protocol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClient">timeout_client</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http2_enabled_input`<sup>Optional</sup> <a name="http2_enabled_input" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.http2EnabledInput"></a>

```python
http2_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inbound_proxy_protocol_input`<sup>Optional</sup> <a name="inbound_proxy_protocol_input" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocolInput"></a>

```python
inbound_proxy_protocol_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_client_input`<sup>Optional</sup> <a name="timeout_client_input" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClientInput"></a>

```python
timeout_client_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http2_enabled`<sup>Required</sup> <a name="http2_enabled" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inbound_proxy_protocol`<sup>Required</sup> <a name="inbound_proxy_protocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocol"></a>

```python
inbound_proxy_protocol: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_client`<sup>Required</sup> <a name="timeout_client" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClient"></a>

```python
timeout_client: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: LoadbalancerFrontendProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---



